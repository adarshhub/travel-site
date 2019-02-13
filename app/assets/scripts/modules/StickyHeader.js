import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import $ from 'jquery';

class StickyHeader{
    constructor(){
        this.headerLinks = $('.site-header__nav ul li a');
        this.pageSections = $('.page_section');
        this.darkOffsetElement = $('.large-hero__title');
        this.header = $('.site-header');
        this.darkHeaderListener();
        this.createPageSectionWaypoints();
    }

    darkHeaderListener(){
        var that = this;
        new Waypoint({
            element: that.darkOffsetElement[0],
            handler: function(direction) {
                if(direction == 'down')
                    that.header.addClass('site-header__is-dark');
                else
                    that.header.removeClass('site-header__is-dark');
            }
        });
    }

    createPageSectionWaypoints(){
        var that = this;
        var myOffset;
        this.pageSections.each(function(){
            var currentPageSection = this;
            new Waypoint({
                element: currentPageSection,
                handler: function(){
                    that.headerLinks.removeClass('is-active');
                    $(currentPageSection.getAttribute('data-matching-link')).addClass('is-active');
                }
            })
        });
    }
}

export default StickyHeader;