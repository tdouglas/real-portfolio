
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'front_end'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_left_slice}","mouseover",function(sym,e){sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_left_slice}","mouseout",function(sym,e){sym.playReverse();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2000,function(sym,e){sym.stop();});
//Edge binding end
})("front_end");
//Edge symbol end:'front_end'

//=========================================================

//Edge symbol: 'ux'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2000,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_right_slice}","mouseover",function(sym,e){sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_right_slice}","mouseout",function(sym,e){sym.playReverse();});
//Edge binding end
})("ux");
//Edge symbol end:'ux'

//=========================================================

//Edge symbol: 'back_end'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2000,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_bottom_slice}","mouseover",function(sym,e){sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_bottom_slice}","mouseout",function(sym,e){sym.playReverse();});
//Edge binding end
})("back_end");
//Edge symbol end:'back_end'

//=========================================================

//Edge symbol: 'chart'
(function(symbolName){})("chart");
//Edge symbol end:'chart'
})(jQuery,AdobeEdge,"EDGE-103386554");