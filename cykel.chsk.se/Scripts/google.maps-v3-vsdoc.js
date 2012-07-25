//
// Scraping utility by Markus Olsson - http://www.freakcode.com
//
// vsdoc intellisense hints generated from scraped content at:
//
//     http://code.google.com/intl/en-US/apis/maps/documentation/v3/reference.html
//
// by GoogleMaps3VsDocGenerator 1.0.0 at 2009-11-23 14:16 (UTC)
//

google = {}
google.maps = {}

google.maps.Map = function(mapDiv, opts) {
    /// <summary>Creates a new map inside of the given HTML container, which is typically a DIV element. </summary>
    /// <param name="mapDiv" type="Node"></param>
    /// <param name="opts" type="MapOptions">optional</param>
    /// <returns type="google.maps.Map"></returns>
}
google.maps.Map.prototype = {
    fitBounds : function(bounds){
        /// <summary>Sets the maps to fit to the given bounds. </summary>
        /// <param name="bounds" type="LatLngBounds"></param>
        /// <returns type="None"></returns>
    },
    getBounds : function(){
        /// <summary>Returns the lat/lng bounds of the current viewport. If the map is not yet initialized (i.e. the mapType is still null), or center and zoom have not been set then the result is null.</summary>
        /// <returns type="google.maps.LatLngBounds"></returns>
    },
    getCenter : function(){
        /// <summary></summary>
        /// <returns type="google.maps.LatLng"></returns>
    },
    getDiv : function(){
        /// <summary></summary>
        /// <returns type="Node" domElement="true"></returns>
    },
    getMapTypeId : function(){
        /// <summary></summary>
        /// <returns type="String"></returns>
    },
    getZoom : function(){
        /// <summary></summary>
        /// <returns type="Number"></returns>
    },
    panBy : function(x, y){
        /// <summary>Changes the center of the map by the given distance in pixels.  If the distance is less than both the width and height of the map, the transition is smoothly animated.  Note that the map coordinate system increases from west to east (for x values) and north to south (for y values). </summary>
        /// <param name="x" type="number"></param>
        /// <param name="y" type="number"></param>
        /// <returns type="None"></returns>
    },
    panTo : function(latLng){
        /// <summary>Changes the center of the map to the given LatLng.  If the change is less than both the width and height of the map, the transition is smoothly animated.</summary>
        /// <param name="latLng" type="LatLng"></param>
        /// <returns type="None"></returns>
    },
    setCenter : function(latlng){
        /// <summary></summary>
        /// <param name="latlng" type="LatLng"></param>
        /// <returns type="None"></returns>
    },
    setMapTypeId : function(mapTypeId){
        /// <summary></summary>
        /// <param name="mapTypeId" type="string"></param>
        /// <returns type="None"></returns>
    },
    setOptions : function(options){
        /// <summary></summary>
        /// <param name="options" type="MapOptions"></param>
        /// <returns type="None"></returns>
    },
    setZoom : function(zoom){
        /// <summary></summary>
        /// <param name="zoom" type="number"></param>
        /// <returns type="None"></returns>
    }
}
google.maps.Marker = function(opts) {
    /// <summary>Creates a marker with the options specified. If a map is specified, the marker is added to the map upon construction. Note that the position must be set for the marker to display. </summary>
    /// <param name="opts" type="MarkerOptions">optional</param>
    /// <returns type="google.maps.Marker"></returns>
}
google.maps.Marker.prototype = {
    getClickable : function(){
        /// <summary></summary>
        /// <returns type="boolean"></returns>
    },
    getCursor : function(){
        /// <summary></summary>
        /// <returns type="String"></returns>
    },
    getDraggable : function(){
        /// <summary></summary>
        /// <returns type="boolean"></returns>
    },
    getFlat : function(){
        /// <summary></summary>
        /// <returns type="boolean"></returns>
    },
    getIcon : function(){
        /// <summary></summary>
        /// <returns type="string|MarkerImage"></returns>
    },
    getMap : function(){
        /// <summary></summary>
        /// <returns type="google.maps.Map"></returns>
    },
    getPosition : function(){
        /// <summary></summary>
        /// <returns type="google.maps.LatLng"></returns>
    },
    getShadow : function(){
        /// <summary></summary>
        /// <returns type="string|MarkerImage"></returns>
    },
    getShape : function(){
        /// <summary></summary>
        /// <returns type="Object"></returns>
    },
    getTarget : function(){
        /// <summary></summary>
        /// <returns type="string|MarkerImage"></returns>
    },
    getTitle : function(){
        /// <summary></summary>
        /// <returns type="String"></returns>
    },
    getVisible : function(){
        /// <summary></summary>
        /// <returns type="boolean"></returns>
    },
    getZIndex : function(){
        /// <summary></summary>
        /// <returns type="Number"></returns>
    },
    setClickable : function(flag){
        /// <summary></summary>
        /// <param name="flag" type="boolean"></param>
        /// <returns type="None"></returns>
    },
    setCursor : function(cursor){
        /// <summary></summary>
        /// <param name="cursor" type="string"></param>
        /// <returns type="None"></returns>
    },
    setDraggable : function(flag){
        /// <summary></summary>
        /// <param name="flag" type="boolean"></param>
        /// <returns type="None"></returns>
    },
    setFlat : function(flag){
        /// <summary></summary>
        /// <param name="flag" type="boolean"></param>
        /// <returns type="None"></returns>
    },
    setIcon : function(icon){
        /// <summary></summary>
        /// <param name="icon" type="string|MarkerImage"></param>
        /// <returns type="None"></returns>
    },
    setMap : function(map){
        /// <summary>Renders the marker on the specified map.  If map is set to null, the marker will be removed.</summary>
        /// <param name="map" type="Map"></param>
        /// <returns type="None"></returns>
    },
    setOptions : function(options){
        /// <summary></summary>
        /// <param name="options" type="MarkerOptions"></param>
        /// <returns type="None"></returns>
    },
    setPosition : function(latlng){
        /// <summary></summary>
        /// <param name="latlng" type="LatLng"></param>
        /// <returns type="None"></returns>
    },
    setShadow : function(shadow){
        /// <summary></summary>
        /// <param name="shadow" type="string|MarkerImage"></param>
        /// <returns type="None"></returns>
    },
    setShape : function(shape){
        /// <summary></summary>
        /// <param name="shape" type="Object"></param>
        /// <returns type="None"></returns>
    },
    setTarget : function(target){
        /// <summary></summary>
        /// <param name="target" type="string|MarkerImage"></param>
        /// <returns type="None"></returns>
    },
    setTitle : function(title){
        /// <summary></summary>
        /// <param name="title" type="string"></param>
        /// <returns type="None"></returns>
    },
    setVisible : function(visible){
        /// <summary></summary>
        /// <param name="visible" type="boolean"></param>
        /// <returns type="None"></returns>
    },
    setZIndex : function(zIndex){
        /// <summary></summary>
        /// <param name="zIndex" type="number"></param>
        /// <returns type="None"></returns>
    }
}
google.maps.MarkerImage = function(url, size, origin, anchor) {
    /// <summary>Defines an image to be used as the icon or shadow for a Marker. &apos;origin&apos; and &apos;size&apos; are used to select a segment of a sprite image and &apos;anchor&apos; overrides the position of the anchor point from its default bottom middle position. The anchor of an image is the pixel to which the system refers in tracking the image&apos;s position. By default, the anchor is set to the bottom middle of the image (coordinates width/2, height). So when a marker is placed at a given LatLng, the pixel defined as the anchor is positioned at the specified LatLng. The MarkerImage cannot be changed once constructed. </summary>
    /// <param name="url" type="string"></param>
    /// <param name="size" type="Size">optional</param>
    /// <param name="origin" type="Point">optional</param>
    /// <param name="anchor" type="Point">optional</param>
    /// <returns type="google.maps.MarkerImage"></returns>
}
google.maps.Polyline = function(opts) {
    /// <summary>Create a polyline using the passed Polyline options, which specify both the path of the polyline and the stroke style to use when drawing the polyline. You may pass either an array of LatLngs or an MVCArray of LatLngs when constructing a polyline, though simple arrays are converted to MVCArrays within the polyline upon instantiation.</summary>
    /// <param name="opts" type="PolylineOptions">optional</param>
    /// <returns type="google.maps.Polyline"></returns>
}
google.maps.Polyline.prototype = {
    getPath : function(){
        /// <summary>Retrieves the first path.</summary>
        /// <returns type="MVCArray.&lt;LatLng&gt;"></returns>
    },
    setMap : function(map){
        /// <summary>Renders this Polyline or Polygon on the specified map.  If map is set to null, the Poly will be removed.</summary>
        /// <param name="map" type="Map"></param>
        /// <returns type="None"></returns>
    },
    setOptions : function(options){
        /// <summary></summary>
        /// <param name="options" type="PolylineOptions"></param>
        /// <returns type="None"></returns>
    },
    setPath : function(path){
        /// <summary>Sets the first path.  See Polyline options for more details.</summary>
        /// <param name="path" type="MVCArray.&lt;LatLng&gt;|Array.&lt;LatLng&gt;"></param>
        /// <returns type="None"></returns>
    }
}
google.maps.Polygon = function(opts) {
    /// <summary>Create a polygon using the passed Polygon options, which specify the polygon&apos;s path, the stroke style for the polygon&apos;s edges, and the fill style for the polygon&apos;s interior regions. A polygon may contain one or more paths, where each path consists of an array of LatLngs.  You may pass either an array of LatLngs or an MVCArray of LatLngs when constructing these paths.  Arrays are converted to MVCArrays within the polygon upon instantiation.</summary>
    /// <param name="opts" type="PolygonOptions">optional</param>
    /// <returns type="google.maps.Polygon"></returns>
}
google.maps.Polygon.prototype = {
    getPath : function(){
        /// <summary>Retrieves the first path.</summary>
        /// <returns type="MVCArray.&lt;LatLng&gt;"></returns>
    },
    getPaths : function(){
        /// <summary>Retrieves the paths for this Polygon.</summary>
        /// <returns type="MVCArray.&lt;MVCArray.&lt;LatLng&gt;&gt;"></returns>
    },
    setMap : function(map){
        /// <summary>Renders this Polyline or Polygon on the specified map.  If map is set to null, the Poly will be removed.</summary>
        /// <param name="map" type="Map"></param>
        /// <returns type="None"></returns>
    },
    setOptions : function(options){
        /// <summary></summary>
        /// <param name="options" type="PolygonOptions"></param>
        /// <returns type="None"></returns>
    },
    setPath : function(path){
        /// <summary>Sets the first path.  See Polyline options for more details.</summary>
        /// <param name="path" type="MVCArray.&lt;LatLng&gt;|Array.&lt;LatLng&gt;"></param>
        /// <returns type="None"></returns>
    },
    setPaths : function(paths){
        /// <summary>Sets the path for this Polygon.</summary>
        /// <param name="paths" type="MVCArray.&lt;MVCArray.&lt;LatLng&gt;&gt;|MVCArray.&lt;LatLng&gt;|Array.&lt;Array.&lt;LatLng&gt;&gt;|Array.&lt;LatLng&gt;"></param>
        /// <returns type="None"></returns>
    }
}
google.maps.InfoWindow = function(opts) {
    /// <summary>Creates an info window with the given options.  An InfoWindow can be placed on a map at a particular position or above a marker, depending on what is specified in the options. Unless auto-pan is disabled, an InfoWindow will pan the map to make itself visible when it is opened. After constructing an InfoWindow, you must call open to display it on the map.  The user can  click the close button on the InfoWindow to remove it from the map, or the developer can call close() for the same effect. </summary>
    /// <param name="opts" type="InfoWindowOptions">optional</param>
    /// <returns type="google.maps.InfoWindow"></returns>
}
google.maps.InfoWindow.prototype = {
    close : function(){
        /// <summary>Closes this InfoWindow by removing it from the DOM structure.</summary>
        /// <returns type="None"></returns>
    },
    getContent : function(){
        /// <summary></summary>
        /// <returns type="string|Node"></returns>
    },
    getPosition : function(){
        /// <summary></summary>
        /// <returns type="google.maps.LatLng"></returns>
    },
    getZIndex : function(){
        /// <summary></summary>
        /// <returns type="Number"></returns>
    },
    open : function(map, anchor){
        /// <summary>Opens this InfoWindow on the given map.  Optionally, an InfoWindow can be associated with an anchor.  In the core API, the only anchor is the Marker class.  However, an anchor can be any MVCObject that exposes the position property and optionally pixelBounds for calculating the pixelOffset (see InfoWindowOptions).</summary>
        /// <param name="map" type="Map"></param>
        /// <param name="anchor" type="MVCObject">optional</param>
        /// <returns type="None"></returns>
    },
    setContent : function(content){
        /// <summary></summary>
        /// <param name="content" type="string|Node"></param>
        /// <returns type="None"></returns>
    },
    setOptions : function(options){
        /// <summary></summary>
        /// <param name="options" type="InfoWindowOptions"></param>
        /// <returns type="None"></returns>
    },
    setPosition : function(position){
        /// <summary></summary>
        /// <param name="position" type="LatLng"></param>
        /// <returns type="None"></returns>
    },
    setZIndex : function(zIndex){
        /// <summary></summary>
        /// <param name="zIndex" type="number"></param>
        /// <returns type="None"></returns>
    }
}
google.maps.Geocoder = function() {
    /// <summary>Creates a new instance of a Geocoder that sends geocode requests to Google servers. </summary>
    /// <returns type="google.maps.Geocoder"></returns>
}
google.maps.Geocoder.prototype = {
    geocode : function(request, callback){
        /// <summary>Geocode a request.</summary>
        /// <param name="request" type="GeocoderRequest"></param>
        /// <param name="callback" type="function(Array.&lt;GeocoderResponse&gt;"></param>
        /// <returns type="None"></returns>
    }
}
google.maps.DirectionsRenderer = function(opts) {
    /// <summary>Creates the renderer with the given options.  Directions can be rendered on a map (as visual overlays) or additionally on a &amp;lt;div&amp;gt; panel (as textual instructions).</summary>
    /// <param name="opts" type="DirectionsRendererOptions">optional</param>
    /// <returns type="google.maps.DirectionsRenderer"></returns>
}
google.maps.DirectionsRenderer.prototype = {
    getDirections : function(){
        /// <summary>Returns the renderer&apos;s current set of directions.</summary>
        /// <returns type="DirectionsResult"></returns>
    },
    getMap : function(){
        /// <summary>Returns the map on which the DirectionsResult is rendered.</summary>
        /// <returns type="google.maps.Map"></returns>
    },
    getPanel : function(){
        /// <summary>Returns the panel &amp;lt;div&amp;gt; in which the DirectionsResult is rendered.</summary>
        /// <returns type="Node" domElement="true"></returns>
    },
    getTripIndex : function(){
        /// <summary>Returns the current trip index in use by this DirectionsRenderer object.</summary>
        /// <returns type="Number"></returns>
    },
    setDirections : function(directions){
        /// <summary>Set the renderer to use the result from the DirectionsService. Setting a valid set of directions in this manner will display the directions on the renderer&apos;s designated map and panel.</summary>
        /// <param name="directions" type="DirectionsResult"></param>
        /// <returns type="None"></returns>
    },
    setMap : function(map){
        /// <summary>This method specifies the map on which directions will be rendered.  Pass null to remove the directions from the map.</summary>
        /// <param name="map" type="Map"></param>
        /// <returns type="None"></returns>
    },
    setPanel : function(panel){
        /// <summary>This method renders the directions in a &amp;lt;div&amp;gt;.  Pass null to remove the content from the panel.</summary>
        /// <param name="panel" type="Node"></param>
        /// <returns type="None"></returns>
    },
    setTripIndex : function(tripIndex){
        /// <summary>Set the index of the trip in the DirectionsResult object to render.  By default, the first trip in the array will be rendered.</summary>
        /// <param name="tripIndex" type="number"></param>
        /// <returns type="None"></returns>
    }
}
google.maps.DirectionsService = function() {
    /// <summary>Creates a new instance of a DirectionsService that sends directions queries to Google servers. </summary>
    /// <returns type="google.maps.DirectionsService"></returns>
}
google.maps.DirectionsService.prototype = {
    route : function(request, callback){
        /// <summary>Issue a directions search request.</summary>
        /// <param name="request" type="DirectionsRequest"></param>
        /// <param name="callback" type="function(DirectionsResult"></param>
        /// <returns type="None"></returns>
    }
}
google.maps.event = {
    addDomListener : function(instance, eventName, handler){
        /// <summary>Cross browser event handler registration. This listener is removed by calling eventRemoveListener(handle) for the handle that is returned by this function.</summary>
        /// <param name="instance" type="Object"></param>
        /// <param name="eventName" type="string"></param>
        /// <param name="handler" type="Function"></param>
        /// <returns type="MapsEventListener"></returns>
    },
    addListener : function(instance, eventName, handler){
        /// <summary>Adds the given listener function to the the given event name for the given object instance. Returns an identifier for this listener that can be used with eventRemoveListener().</summary>
        /// <param name="instance" type="Object"></param>
        /// <param name="eventName" type="string"></param>
        /// <param name="handler" type="Function"></param>
        /// <returns type="MapsEventListener"></returns>
    },
    clearInstanceListeners : function(instance){
        /// <summary>Removes all listeners for all events for the given instance.</summary>
        /// <param name="instance" type="Object"></param>
        /// <returns type="None"></returns>
    },
    clearListeners : function(instance, eventName){
        /// <summary>Removes all listeners for the given event for the given instance.</summary>
        /// <param name="instance" type="Object"></param>
        /// <param name="eventName" type="string"></param>
        /// <returns type="None"></returns>
    },
    removeListener : function(listener){
        /// <summary>Removes the given listener, which should have been returned by eventAddListener above.</summary>
        /// <param name="listener" type="MapsEventListener"></param>
        /// <returns type="None"></returns>
    },
    trigger : function(instance, eventName, var_args){
        /// <summary>Triggers the given event. All arguments after eventName are passed as arguments to the listeners.</summary>
        /// <param name="instance" type="Object"></param>
        /// <param name="eventName" type="string"></param>
        /// <param name="var_args" type="*"></param>
        /// <returns type="None"></returns>
    }
}
google.maps.LatLng = function(lat, lng, noWrap) {
    /// <summary>Notice the ordering of latitude and longitude. If the noWrap flag is true, then the numbers will be used as passed, otherwise latitude will be clamped to lie between -90 degrees and +90 degrees, and longitude will be wrapped to lie between -180 degrees and +180 degrees. </summary>
    /// <param name="lat" type="number"></param>
    /// <param name="lng" type="number"></param>
    /// <param name="noWrap" type="boolean">optional</param>
    /// <returns type="google.maps.LatLng"></returns>
}
google.maps.LatLng.prototype = {
    equals : function(other){
        /// <summary>Comparison function.</summary>
        /// <param name="other" type="LatLng"></param>
        /// <returns type="boolean"></returns>
    },
    lat : function(){
        /// <summary>Returns the latitude in degrees.</summary>
        /// <returns type="Number"></returns>
    },
    lng : function(){
        /// <summary>Returns the longitude in degrees.</summary>
        /// <returns type="Number"></returns>
    },
    toString : function(){
        /// <summary>Converts to string representation.</summary>
        /// <returns type="String"></returns>
    },
    toUrlValue : function(precision){
        /// <summary>Returns a string of the form &quot;lat,lng&quot; for this LatLng. We round the lat/lng values to 6 decimal places by default. </summary>
        /// <param name="precision" type="number">optional</param>
        /// <returns type="String"></returns>
    }
}
google.maps.MVCArray = function(array) {
    /// <summary>A mutable MVC Array.</summary>
    /// <param name="array" type="Array">optional</param>
    /// <returns type="google.maps.MVCArray"></returns>
}
google.maps.MVCArray.prototype = {
    forEach : function(callback){
        /// <summary>Iterate over each element, calling the provided callback. The callback is called for each element like: callback(element, index).</summary>
        /// <param name="callback" type="function(*"></param>
        /// <returns type="None"></returns>
    },
    getAt : function(i){
        /// <summary>Get an element at the specified index.</summary>
        /// <param name="i" type="number"></param>
        /// <returns type="*"></returns>
    },
    getLength : function(){
        /// <summary></summary>
        /// <returns type=""></returns>
    },
    insertAt : function(i, elem){
        /// <summary>Insert an element at the specified index.</summary>
        /// <param name="i" type="number"></param>
        /// <param name="elem" type="*"></param>
        /// <returns type="None"></returns>
    },
    removeAt : function(i){
        /// <summary>Remove an element from the specified index.</summary>
        /// <param name="i" type="number"></param>
        /// <returns type="*"></returns>
    },
    setAt : function(i, elem){
        /// <summary>Set an element at the specified index.</summary>
        /// <param name="i" type="number"></param>
        /// <param name="elem" type="*"></param>
        /// <returns type="None"></returns>
    }
}
google.maps.Point = function(x, y) {
    /// <summary>A point on a two-dimensional plane.</summary>
    /// <param name="x" type="number"></param>
    /// <param name="y" type="number"></param>
    /// <returns type="google.maps.Point"></returns>
}
google.maps.Point.prototype = {
    equals : function(other){
        /// <summary>Compares two Points</summary>
        /// <param name="other" type="Point"></param>
        /// <returns type="boolean"></returns>
    },
    toString : function(){
        /// <summary>Returns a string representation of this Point.</summary>
        /// <returns type="String"></returns>
    }
}
google.maps.Size = function(width, height, widthUnit, heightUnit) {
    /// <summary>Two-dimensonal size, where width is the distance on the x-axis, and height is the distance on the y-axis.</summary>
    /// <param name="width" type="number"></param>
    /// <param name="height" type="number"></param>
    /// <param name="widthUnit" type="string">optional</param>
    /// <param name="heightUnit" type="string">optional</param>
    /// <returns type="google.maps.Size"></returns>
}
google.maps.Size.prototype = {
    equals : function(other){
        /// <summary>Compares two Sizes.</summary>
        /// <param name="other" type="Size"></param>
        /// <returns type="boolean"></returns>
    },
    toString : function(){
        /// <summary>Returns a string representation of this Size.</summary>
        /// <returns type="String"></returns>
    }
}
google.maps.MVCObject = function() {
    /// <summary>Base class implementing KVO.</summary>
    /// <returns type="google.maps.MVCObject"></returns>
}
google.maps.MVCObject.prototype = {
    bindTo : function(key, target, targetKey, noNotify){
        /// <summary>Binds a View to a Model.</summary>
        /// <param name="key" type="string"></param>
        /// <param name="target" type="MVCObject"></param>
        /// <param name="targetKey" type="string"></param>
        /// <param name="noNotify" type="boolean">optional</param>
        /// <returns type="None"></returns>
    },
    changed : function(key){
        /// <summary>Generic handler for state changes. Override this in derived classes to handle arbitrary state changes.</summary>
        /// <param name="key" type="string"></param>
        /// <returns type="None"></returns>
    },
    get : function(key){
        /// <summary>Gets a value.</summary>
        /// <param name="key" type="string"></param>
        /// <returns type="*"></returns>
    },
    set : function(key, value){
        /// <summary>Sets a value.</summary>
        /// <param name="key" type="string"></param>
        /// <param name="value" type="*"></param>
        /// <returns type="None"></returns>
    },
    setValues : function(values){
        /// <summary>Sets a collection of key-value pairs.</summary>
        /// <param name="values" type="Object"></param>
        /// <returns type="None"></returns>
    },
    unbind : function(key){
        /// <summary>Removes a binding.  Unbinding will set the unbound property to the current value.  The object will not be notified, as the value has not changed.</summary>
        /// <param name="key" type="string"></param>
        /// <returns type="None"></returns>
    }
}
google.maps.OverlayView = function() {
    /// <summary>You should inherit from this class by setting your overlay&apos;s prototype to new OverlayView.prototype.  You must implement three methods: onAdd(), draw(), and onRemove().  In the add() method, you should create DOM objects and append them as children of the panes.  In the draw() method, you should position these elements. In the onRemove() method, you should remove the objects from the DOM.  You must call setMap() with a valid Map object to trigger the call to the onAdd() method and setMap(null) in order to trigger the onRemove() method.  The setMap() method can be called at the time of construction or at any point afterward when the overlay should be re-shown after removing.  The draw() method will then be called whenever a map property changes that could change the position of the element, such as zoom, center, or map type. </summary>
    /// <returns type="google.maps.OverlayView"></returns>
}
google.maps.OverlayView.prototype = {
    draw : function(){
        /// <summary>Implement this method to draw or update the overlay.  This method is called after onAdd() and when the position from projection.fromLatLngToPixel() would return a new value for a given LatLng.  This can happen on change of zoom, center, or map type.  It is not necessarily called on drag or resize.</summary>
        /// <returns type="None"></returns>
    },
    getMap : function(){
        /// <summary></summary>
        /// <returns type="google.maps.Map"></returns>
    },
    getPanes : function(){
        /// <summary>Returns the panes in which this OverlayView can be rendered.  Only available after draw has been called.</summary>
        /// <returns type="MapPanes"></returns>
    },
    getProjection : function(){
        /// <summary>Returns the MapCanvasProjection object associated with this OverlayView. Only available after draw has been called.</summary>
        /// <returns type="MapCanvasProjection"></returns>
    },
    onAdd : function(){
        /// <summary>Implement this method to initialize the overlay DOM elements.  This method is called once after setMap() is called with a valid map.  At this point, panes and projection will have been initialized.</summary>
        /// <returns type="None"></returns>
    },
    onRemove : function(){
        /// <summary>Implement this method to remove your elements from the DOM.  This method is called once following a call to setMap(null).</summary>
        /// <returns type="None"></returns>
    },
    setMap : function(map){
        /// <summary>Adds the overlay to the map. </summary>
        /// <param name="map" type="Map"></param>
        /// <returns type="None"></returns>
    }
}
