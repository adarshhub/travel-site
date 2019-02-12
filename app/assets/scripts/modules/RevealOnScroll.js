import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import $ from 'jquery';

class RevealOnScroll{
    constructor(ele, offset){
        this.offsetPercentage = offset;
        this.elements = ele;
        this.hideOnStart();
        this.CreateWaypoints();
    }

    hideOnStart(){
        this.elements.addClass('hide_item');
    }

    CreateWaypoints(){
        var that = this;
        this.elements.each(function(){
            var currentItem = this;
            console.log(currentItem);
            new Waypoint({
                element: currentItem,
                handler: function(){
                    $(currentItem).addClass('hide_item__is-visible');
                    console.log(currentItem);
                },
                offset: that.offsetPercentage
            });
        });
    }
}

export default RevealOnScroll;