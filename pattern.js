/***
*   Author: Tobi Turing <webdev@fet.li>
*   Version: GoLv1
*   Date: 2016-10-21
*   License: 
*   The MIT License (MIT)

Copyright (c) 2016 Tobi Turing

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

"use strict";

js.pattern = true;

if(!js.grid) { alert('need grid.js to run'); }

var pattern = {
    logo:function (x,y){
      //w
      pixel(1+x,4+y);
      pixel(2+x,5+y);
      pixel(2+x,6+y);
      pixel(3+x,5+y);
      pixel(4+x,5+y);
      pixel(4+x,6+y);
      pixel(5+x,4+y);
      //a
      pixel(6+x,6+y);
      pixel(7+x,4+y);
      pixel(7+x,5+y);
      pixel(8+x,4+y);
      pixel(9+x,5+y);
      pixel(9+x,6+y);
      //v
      pixel(11+x,4+y);
      pixel(12+x,5+y);
      pixel(12+x,6+y);
      pixel(13+x,5+y);
      pixel(14+x,4+y);
    },
    
	pentos:function (x,y) {
        if (x === undefined || y === undefined) {
			var x = 0; var y = 0;
		}
		pixel(0+x,0+y);
		pixel(1+x,0+y);
		pixel(1+x,1+y);
		pixel(1+x,2+y);
		pixel(2+x,1+y);
	},

	glider:function (x,y) {
        if (x === undefined || y === undefined) {
			var x = 0; var y = 0;
		}
		pixel(0+x,0+y);
		pixel(1+x,1+y);
		pixel(1+x,2+y);
		pixel(2+x,0+y);
		pixel(2+x,1+y);
	},
    
    line:function (){
	for(var j=0; j<2; j++){
          for(var i=0; i<matrix.size; i++){
            pixel(i,j);
          }
        }
        for(var i=0; i<matrix.size; i++){
            pixel(i,0);
        }
    },
}
