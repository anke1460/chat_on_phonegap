/**
 * Adds a Load More button at the bottom of the list. When the user presses this button,
 * the next page of data will be loaded into the store and appended to the List.
 *
 * By specifying `{@link #autoPaging}: true`, an 'infinite scroll' effect can be achieved,
 * i.e., the next page of content will load automatically when the user scrolls to the
 * bottom of the list.
 *
 * ## Example
 *
 *     Ext.define('TweetList', {
 *         extend: 'Ext.List',
 *
 *         config: {
 *             store: Ext.create('TweetStore'),
 *
 *             plugins: [
 *                 {
 *                     xclass: 'Ext.plugin.ListPaging',
 *                     autoPaging: true
 *                 }
 *             ],
 *
 *             itemTpl: [
 *                 '<img src="{profile_image_url}" />',
 *                 '<div class="tweet">{text}</div>'
 *             ]
 *         }
 *     });
 *
 */
Ext.define('Ext.plugin.ListPaging', {
    extend: 'Ext.Component',
    alias: 'plugin.listpaging',

    config: {
        /**
         * @cfg {Boolean} autoPaging
         * True to automatically load the next page when you scroll to the bottom of the list.
         */
        autoPaging: false,

        /**
         * @cfg {String} loadMoreText The text used as the label of the Load More button.
         */
        loadMoreText: 'Load More...',
        
        /**
         * @cfg {String} noMoreRecordsText The text used as the label of the Load More button when the Store's
         * {@link Ext.data.Store#totalCount totalCount} indicates that all of the records available on the server are
         * already loaded
         */
        noMoreRecordsText: 'No More Records',

        /**
         * @private
         * @cfg {String} loadTpl The template used to render the load more text
         */
        loadTpl: [
            '<div class="{cssPrefix}loading-spinner" style="font-size: 180%; margin: 10px auto;">',
                 '<span class="{cssPrefix}loading-top"></span>',
                 '<span class="{cssPrefix}loading-right"></span>',
                 '<span class="{cssPrefix}loading-bottom"></span>',
                 '<span class="{cssPrefix}loading-left"></span>',
            '</div>',
            '<div class="{cssPrefix}list-paging-msg">{message}</div>'
        ].join(''),
        
        /**
         * 
         */
        loadMoreCmp: {
            xtype: 'component',
            baseCls: Ext.baseCSSPrefix + 'list-paging'
        },
        
        /**
         * @private
         * @cfg {Boolean} loadMoreCmpAdded Indicates whether or not the load more component has been added to the List
         * yet.
         */
        loadMoreCmpAdded: false,
        
        /**
         * @private
         * @cfg {String} loadingCls The CSS class that is added to the {@link #loadMoreCmp} while the Store is loading
         */
        loadingCls: Ext.baseCSSPrefix + 'loading',
        
        /**
         * @private
         * @cfg {Ext.List} list Local reference to the List this plugin is bound to
         */
        list: null,
        
        /**
         * @private
         * @cfg {Ext.scroll.Scroller} scroller Local reference to the List's Scroller
         */
        scroller: null,
        
        /**
         * @private
         * @cfg {Boolean} loading True if the plugin has initiated a Store load that has not yet completed
         */
        loading: false
    },
    
    /**
     * @private
     * Sets up all of the references the plugin needs
     */
    init: function(list) {
        var scroller = list.getScrollable().getScroller();
        
        this.setList(list);
        this.setScroller(scroller);
        
        list.getStore().on('load', this.onStoreLoad, this);
        
        // Disable main list load mask as we provide our own
        list.setLoadingText(null);

        if (this.getAutoPaging()) {
            scroller.on({
                scrollend: this.onScrollEnd,
                scope: this
            });
        }
    },

    /**
     * @private
     */
    applyLoadTpl: function(config) {
        return (Ext.isObject(config) && config.isTemplate) ? config : new Ext.XTemplate(config);
    },
    
    /**
     * @private
     */
    applyLoadMoreCmp: function(config) {
        config = Ext.merge(config, {
            html: this.getLoadTpl().apply({
                cssPrefix: Ext.baseCSSPrefix,
                message: this.getLoadMoreText()
            }),
            listeners: {
                tap: {
                    fn: this.loadNextPage,
                    scope: this,
                    element: 'element'
                }
            }
        });
        
        return Ext.factory(config, Ext.Component, this.getLoadMoreCmp());
    },
    
    /**
     * @private
     * If we're using autoPaging and detect that the user has scrolled to the bottom, kick off loading of the next page
     */
    onScrollEnd: function(scroller, position) {
        if (!this.getLoading() && position.y >= scroller.maxPosition.y) {
            if (!this.storeFullyLoaded()) {
                this.loadNextPage();
            }
        }
    },
    
    /**
     * @private
     * Makes sure we add/remove the loading CSS class while the Store is loading
     */
    updateLoading: function(isLoading) {
        var loadMoreCmp = this.getLoadMoreCmp(),
            loadMoreCls = this.getLoadingCls();
        
        if (isLoading) {
            loadMoreCmp.addCls(loadMoreCls);
        } else {
            loadMoreCmp.removeCls(loadMoreCls);
        }
    },

    /**
     * @private
     */
    onStoreLoad: function(store) {
        var loadCmp  = this.addLoadMoreCmp(),
            template = this.getLoadTpl(),
            message  = this.storeFullyLoaded() ? this.getNoMoreRecordsText() : this.getLoadMoreText();
        
        this.setLoading(false);

        //restores scroll position after a Store load
        if (this.scrollY) {
            this.getScroller().scrollTo(null, this.scrollY);
            delete this.scrollY;
        }
        
        //if we've reached the end of the data set, switch to the noMoreRecordsText
        loadCmp.setHtml(template.apply({
            cssPrefix: Ext.baseCSSPrefix,
            message: message
        }));
    },

    /**
     * @private
     * Because the attached List's inner list element is rendered after our init function is called,
     * we need to dynamically add the loadMoreCmp later. This does this once and caches the result.
     */
    addLoadMoreCmp: function() {
        var list = this.getList(),
            cmp  = this.getLoadMoreCmp();
        
        if (!this.getLoadMoreCmpAdded()) {
            list.add(cmp);
            this.setLoadMoreCmpAdded(true);
        }
        
        return cmp;
    },
    
    /**
     * @private
     * Returns true if the Store is detected as being fully loaded, or the server did not return a total count, which
     * means we're in 'infinite' mode
     * @return {Boolean} 
     */
    storeFullyLoaded: function() {
        var store = this.getList().getStore(),
            total = store.getTotalCount();
        return total !== null ? store.getTotalCount() <= (store.currentPage * store.pageSize) : false;
    },

    /**
     * @private
     */
    loadNextPage: function() {
        this.setLoading(true);

        //keep a cache of the current scroll position as we'll need to reset it after the List is
        //updated with new data
        this.scrollY = this.getScroller().position.y;

        this.getList().getStore().nextPage({ addRecords: true });
    }
});