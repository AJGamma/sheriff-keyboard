function _tented_case_base_extrude_4_outline_fn(){
    return new CSG.Path2D([[63.6488956,-71.9102403],[37.8756123,-79.2082255]]).appendArc([36.275,-81.325],{"radius":2.2,"clockwise":false,"large":false}).appendPoint([36.275,-81.8722953]).appendArc([30.9568182,-86.8621611],{"radius":5,"clockwise":true,"large":false}).appendArc([30.9568182,-98.8378389],{"radius":6,"clockwise":false,"large":true}).appendArc([36.275,-103.8277047],{"radius":5,"clockwise":true,"large":false}).appendPoint([36.275,-119.9722953]).appendArc([30.9568182,-124.9621611],{"radius":5,"clockwise":true,"large":false}).appendArc([30.9568182,-136.9378389],{"radius":6,"clockwise":false,"large":true}).appendArc([36.275,-141.9277047],{"radius":5,"clockwise":true,"large":false}).appendPoint([36.275,-142.475]).appendArc([36.9193651,-144.0306349],{"radius":2.2,"clockwise":false,"large":false}).appendArc([36.919365,-144.030635],{"radius":2,"clockwise":false,"large":false}).appendPoint([55.969365,-163.080635]).appendArc([55.9708491,-163.0821174],{"radius":2,"clockwise":false,"large":false}).appendArc([57.2924523,-163.7126749],{"radius":2.2,"clockwise":false,"large":false}).appendPoint([95.3924519,-167.7626748]).appendArc([95.625,-167.775],{"radius":2.2,"clockwise":false,"large":false}).appendPoint([118.2961523,-167.775]).appendArc([118.5296594,-167.8026449],{"radius":1,"clockwise":true,"large":false}).appendPoint([167.1213407,-179.4717363]).appendArc([167.4177528,-179.5960433],{"radius":1,"clockwise":true,"large":false}).appendPoint([202.6787033,-201.6295305]).appendArc([205.7102312,-200.9296475],{"radius":2.2,"clockwise":false,"large":false}).appendPoint([206.0002539,-200.4655143]).appendArc([213.1545538,-199.0520752],{"radius":5,"clockwise":true,"large":false}).appendArc([219.5006961,-188.8961244],{"radius":6,"clockwise":false,"large":true}).appendArc([217.6348482,-181.8462711],{"radius":5,"clockwise":true,"large":false}).appendPoint([217.9248705,-181.3821385]).appendArc([218.2587282,-180.2601401],{"radius":2.2,"clockwise":false,"large":false}).appendPoint([218.7007827,-158.0730178]).appendArc([217.667042,-156.1634884],{"radius":2.2,"clockwise":false,"large":false}).appendPoint([199.5200807,-144.8240083]).appendArc([199.05,-143.9759602],{"radius":1,"clockwise":true,"large":false}).appendPoint([199.05,-94.8277047]).appendArc([204.3681818,-89.8378389],{"radius":5,"clockwise":true,"large":false}).appendArc([204.3681818,-77.8621611],{"radius":6,"clockwise":false,"large":true}).appendArc([199.05,-72.8722953],{"radius":5,"clockwise":true,"large":false}).appendPoint([199.05,-72.35]).appendArc([196.8526159,-70.1500016],{"radius":2.2,"clockwise":false,"large":false}).appendPoint([176.0761268,-70.125297]).appendArc([175.9217529,-70.1131237],{"radius":1,"clockwise":true,"large":false}).appendPoint([157.4279225,-67.2007094]).appendArc([157.2385793,-67.1515206],{"radius":1,"clockwise":true,"large":false}).appendPoint([138.4837933,-60.2599982]).appendArc([137.725,-60.125],{"radius":2.2,"clockwise":false,"large":false}).appendPoint([114.6776247,-60.1250017]).appendPoint([76.5778872,-60.0750019]).appendArc([75.0193651,-60.7193651],{"radius":2.2,"clockwise":false,"large":false}).appendArc([75.019365,-60.719365],{"radius":2,"clockwise":false,"large":false}).appendPoint([64.0835532,-71.6551769]).appendArc([63.6488955,-71.9102403],{"radius":1,"clockwise":true,"large":false}).close().innerToCAG()
.subtract(
    CAG.circle({"center":[205.5070225,-164.7492884],"radius":1.1})
.union(
    CAG.circle({"center":[185.9595139,-152.5346494],"radius":1.1})
).union(
    CAG.circle({"center":[145.25,-69.325],"radius":1.1})
).union(
    CAG.circle({"center":[126.2,-162.575],"radius":1.1})
).union(
    CAG.circle({"center":[107.15,-66.325],"radius":1.1})
).union(
    CAG.circle({"center":[53.81,-147],"radius":1.1})
).union(
    CAG.circle({"center":[72.86,-75.8],"radius":1.1})
).union(
    CAG.circle({"center":[30.575,-130.95],"radius":2.5})
).union(
    CAG.circle({"center":[30.575,-92.85],"radius":2.5})
).union(
    CAG.circle({"center":[216.6514252,-194.1764326],"radius":2.5})
).union(
    CAG.circle({"center":[204.75,-83.85],"radius":2.5})
)).extrude({ offset: [0, 0, 4] });
}


function _case_base_board_extrude_100_outline_fn(){
    return new CSG.Path2D([[64.1937935,-73.8345808],[38.4205102,-81.132566]]).appendArc([38.275,-81.325],{"radius":0.2,"clockwise":false,"large":false}).appendPoint([38.275,-142.475]).appendArc([38.3335786,-142.6164214],{"radius":0.2,"clockwise":false,"large":false}).appendPoint([57.3835786,-161.6664214]).appendArc([57.5038593,-161.7238795],{"radius":0.2,"clockwise":false,"large":false}).appendPoint([95.6038593,-165.7738795]).appendArc([95.625,-165.775],{"radius":0.2,"clockwise":false,"large":false}).appendPoint([118.2961523,-165.775]).appendArc([118.9966736,-165.8579347],{"radius":3,"clockwise":true,"large":false}).appendPoint([167.5883548,-177.5270261]).appendArc([168.4775914,-177.8999472],{"radius":3,"clockwise":true,"large":false}).appendPoint([203.7385418,-199.9334343]).appendArc([204.0141353,-199.8698086],{"radius":0.2,"clockwise":false,"large":false}).appendPoint([216.2287743,-180.3223]).appendArc([216.259125,-180.2203001],{"radius":0.2,"clockwise":false,"large":false}).appendPoint([216.7011795,-158.0331779]).appendArc([216.6072031,-157.8595843],{"radius":0.2,"clockwise":false,"large":false}).appendPoint([198.4602421,-146.5201045]).appendArc([197.05,-143.9759602],{"radius":3,"clockwise":true,"large":false}).appendPoint([197.05,-72.35]).appendArc([196.8502378,-72.1500001],{"radius":0.2,"clockwise":false,"large":false}).appendPoint([176.0737487,-72.1252956]).appendArc([175.6106267,-72.0887756],{"radius":3,"clockwise":true,"large":false}).appendPoint([157.1167961,-69.1763613]).appendArc([156.5487671,-69.028795],{"radius":3,"clockwise":true,"large":false}).appendPoint([137.7939812,-62.1372726]).appendArc([137.725,-62.125],{"radius":0.2,"clockwise":false,"large":false}).appendPoint([114.6752625,-62.1250002]).appendPoint([76.5752625,-62.0750002]).appendArc([76.4335786,-62.1335786],{"radius":0.2,"clockwise":false,"large":false}).appendPoint([65.4977668,-73.0693904]).appendArc([64.1937935,-73.8345808],{"radius":3,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 100] });
}


function _case_base_board_extrude_3_outline_fn(){
    return new CSG.Path2D([[64.1937935,-73.8345808],[38.4205102,-81.132566]]).appendArc([38.275,-81.325],{"radius":0.2,"clockwise":false,"large":false}).appendPoint([38.275,-142.475]).appendArc([38.3335786,-142.6164214],{"radius":0.2,"clockwise":false,"large":false}).appendPoint([57.3835786,-161.6664214]).appendArc([57.5038593,-161.7238795],{"radius":0.2,"clockwise":false,"large":false}).appendPoint([95.6038593,-165.7738795]).appendArc([95.625,-165.775],{"radius":0.2,"clockwise":false,"large":false}).appendPoint([118.2961523,-165.775]).appendArc([118.9966736,-165.8579347],{"radius":3,"clockwise":true,"large":false}).appendPoint([167.5883548,-177.5270261]).appendArc([168.4775914,-177.8999472],{"radius":3,"clockwise":true,"large":false}).appendPoint([203.7385418,-199.9334343]).appendArc([204.0141353,-199.8698086],{"radius":0.2,"clockwise":false,"large":false}).appendPoint([216.2287743,-180.3223]).appendArc([216.259125,-180.2203001],{"radius":0.2,"clockwise":false,"large":false}).appendPoint([216.7011795,-158.0331779]).appendArc([216.6072031,-157.8595843],{"radius":0.2,"clockwise":false,"large":false}).appendPoint([198.4602421,-146.5201045]).appendArc([197.05,-143.9759602],{"radius":3,"clockwise":true,"large":false}).appendPoint([197.05,-72.35]).appendArc([196.8502378,-72.1500001],{"radius":0.2,"clockwise":false,"large":false}).appendPoint([176.0737487,-72.1252956]).appendArc([175.6106267,-72.0887756],{"radius":3,"clockwise":true,"large":false}).appendPoint([157.1167961,-69.1763613]).appendArc([156.5487671,-69.028795],{"radius":3,"clockwise":true,"large":false}).appendPoint([137.7939812,-62.1372726]).appendArc([137.725,-62.125],{"radius":0.2,"clockwise":false,"large":false}).appendPoint([114.6752625,-62.1250002]).appendPoint([76.5752625,-62.0750002]).appendArc([76.4335786,-62.1335786],{"radius":0.2,"clockwise":false,"large":false}).appendPoint([65.4977668,-73.0693904]).appendArc([64.1937935,-73.8345808],{"radius":3,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 3] });
}


function _case_wall_outline_extrude_9_outline_fn(){
    return new CSG.Path2D([[63.6488956,-71.9102403],[37.8756123,-79.2082255]]).appendArc([36.275,-81.325],{"radius":2.2,"clockwise":false,"large":false}).appendPoint([36.275,-142.475]).appendArc([36.9193651,-144.0306349],{"radius":2.2,"clockwise":false,"large":false}).appendArc([36.919365,-144.030635],{"radius":2,"clockwise":false,"large":false}).appendPoint([55.969365,-163.080635]).appendArc([55.9708491,-163.0821174],{"radius":2,"clockwise":false,"large":false}).appendArc([57.2924523,-163.7126749],{"radius":2.2,"clockwise":false,"large":false}).appendPoint([95.3924519,-167.7626748]).appendArc([95.625,-167.775],{"radius":2.2,"clockwise":false,"large":false}).appendPoint([118.2961523,-167.775]).appendArc([118.5296594,-167.8026449],{"radius":1,"clockwise":true,"large":false}).appendPoint([167.1213407,-179.4717363]).appendArc([167.4177528,-179.5960433],{"radius":1,"clockwise":true,"large":false}).appendPoint([202.6787033,-201.6295305]).appendArc([205.7102312,-200.9296475],{"radius":2.2,"clockwise":false,"large":false}).appendPoint([217.9248705,-181.3821385]).appendArc([218.2587282,-180.2601401],{"radius":2.2,"clockwise":false,"large":false}).appendPoint([218.7007827,-158.0730178]).appendArc([217.667042,-156.1634884],{"radius":2.2,"clockwise":false,"large":false}).appendPoint([199.5200807,-144.8240083]).appendArc([199.05,-143.9759602],{"radius":1,"clockwise":true,"large":false}).appendPoint([199.05,-72.35]).appendArc([196.8526159,-70.1500016],{"radius":2.2,"clockwise":false,"large":false}).appendPoint([176.0761268,-70.125297]).appendArc([175.9217529,-70.1131237],{"radius":1,"clockwise":true,"large":false}).appendPoint([157.4279225,-67.2007094]).appendArc([157.2385793,-67.1515206],{"radius":1,"clockwise":true,"large":false}).appendPoint([138.4837933,-60.2599982]).appendArc([137.725,-60.125],{"radius":2.2,"clockwise":false,"large":false}).appendPoint([114.6776247,-60.1250017]).appendPoint([76.5778872,-60.0750019]).appendArc([75.0193651,-60.7193651],{"radius":2.2,"clockwise":false,"large":false}).appendArc([75.019365,-60.719365],{"radius":2,"clockwise":false,"large":false}).appendPoint([64.0835532,-71.6551769]).appendArc([63.6488955,-71.9102403],{"radius":1,"clockwise":true,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[64.1937935,-73.8345808],[38.4205102,-81.132566]]).appendArc([38.275,-81.325],{"radius":0.2,"clockwise":false,"large":false}).appendPoint([38.275,-142.475]).appendArc([38.3335786,-142.6164214],{"radius":0.2,"clockwise":false,"large":false}).appendPoint([57.3835786,-161.6664214]).appendArc([57.5038593,-161.7238795],{"radius":0.2,"clockwise":false,"large":false}).appendPoint([95.6038593,-165.7738795]).appendArc([95.625,-165.775],{"radius":0.2,"clockwise":false,"large":false}).appendPoint([118.2961523,-165.775]).appendArc([118.9966736,-165.8579347],{"radius":3,"clockwise":true,"large":false}).appendPoint([167.5883548,-177.5270261]).appendArc([168.4775914,-177.8999472],{"radius":3,"clockwise":true,"large":false}).appendPoint([203.7385418,-199.9334343]).appendArc([204.0141353,-199.8698086],{"radius":0.2,"clockwise":false,"large":false}).appendPoint([216.2287743,-180.3223]).appendArc([216.259125,-180.2203001],{"radius":0.2,"clockwise":false,"large":false}).appendPoint([216.7011795,-158.0331779]).appendArc([216.6072031,-157.8595843],{"radius":0.2,"clockwise":false,"large":false}).appendPoint([198.4602421,-146.5201045]).appendArc([197.05,-143.9759602],{"radius":3,"clockwise":true,"large":false}).appendPoint([197.05,-72.35]).appendArc([196.8502378,-72.1500001],{"radius":0.2,"clockwise":false,"large":false}).appendPoint([176.0737487,-72.1252956]).appendArc([175.6106267,-72.0887756],{"radius":3,"clockwise":true,"large":false}).appendPoint([157.1167961,-69.1763613]).appendArc([156.5487671,-69.028795],{"radius":3,"clockwise":true,"large":false}).appendPoint([137.7939812,-62.1372726]).appendArc([137.725,-62.125],{"radius":0.2,"clockwise":false,"large":false}).appendPoint([114.6752625,-62.1250002]).appendPoint([76.5752625,-62.0750002]).appendArc([76.4335786,-62.1335786],{"radius":0.2,"clockwise":false,"large":false}).appendPoint([65.4977668,-73.0693904]).appendArc([64.1937935,-73.8345808],{"radius":3,"clockwise":true,"large":false}).close().innerToCAG()
).extrude({ offset: [0, 0, 9] });
}


function _usb_wall_cutout_outline_extrude_34_outline_fn(){
    return new CSG.Path2D([[180.85,-67.15],[180.85,-83.15]]).appendArc([182.85,-85.15],{"radius":2,"clockwise":false,"large":false}).appendPoint([188.85,-85.15]).appendArc([190.85,-83.15],{"radius":2,"clockwise":false,"large":false}).appendPoint([190.85,-67.15]).appendArc([188.85,-65.15],{"radius":2,"clockwise":false,"large":false}).appendPoint([182.85,-65.15]).appendArc([180.85,-67.15],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 34] });
}


function _trrs_cutout_outline_extrude_34_outline_fn(){
    return new CSG.Path2D([[186.85,-112.09],[186.85,-112.21]]).appendArc([189.79,-115.15],{"radius":2.94,"clockwise":false,"large":false}).appendPoint([203.91,-115.15]).appendArc([206.85,-112.21],{"radius":2.94,"clockwise":false,"large":false}).appendPoint([206.85,-112.09]).appendArc([203.91,-109.15],{"radius":2.94,"clockwise":false,"large":false}).appendPoint([189.79,-109.15]).appendArc([186.85,-112.09],{"radius":2.94,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 34] });
}


function _case_standoff_outline_extrude_5_outline_fn(){
    return CAG.circle({"center":[205.5070225,-164.7492884],"radius":3})
.union(
    CAG.circle({"center":[185.9595139,-152.5346494],"radius":3})
).union(
    CAG.circle({"center":[145.25,-69.325],"radius":3})
).union(
    CAG.circle({"center":[126.2,-162.575],"radius":3})
).union(
    CAG.circle({"center":[107.15,-66.325],"radius":3})
).union(
    CAG.circle({"center":[53.81,-147],"radius":3})
).union(
    CAG.circle({"center":[72.86,-75.8],"radius":3})
).extrude({ offset: [0, 0, 5] });
}


function _case_screw_inserts_outline_extrude_5_outline_fn(){
    return CAG.circle({"center":[205.5070225,-164.7492884],"radius":1.5})
.union(
    CAG.circle({"center":[185.9595139,-152.5346494],"radius":1.5})
).union(
    CAG.circle({"center":[145.25,-69.325],"radius":1.5})
).union(
    CAG.circle({"center":[126.2,-162.575],"radius":1.5})
).union(
    CAG.circle({"center":[107.15,-66.325],"radius":1.5})
).union(
    CAG.circle({"center":[53.81,-147],"radius":1.5})
).union(
    CAG.circle({"center":[72.86,-75.8],"radius":1.5})
).extrude({ offset: [0, 0, 5] });
}




                function _case_wall_case_fn() {
                    

                // creating part 0 of case _case_wall
                let _case_wall__part_0 = _case_wall_outline_extrude_9_outline_fn();

                // make sure that rotations are relative
                let _case_wall__part_0_bounds = _case_wall__part_0.getBounds();
                let _case_wall__part_0_x = _case_wall__part_0_bounds[0].x + (_case_wall__part_0_bounds[1].x - _case_wall__part_0_bounds[0].x) / 2
                let _case_wall__part_0_y = _case_wall__part_0_bounds[0].y + (_case_wall__part_0_bounds[1].y - _case_wall__part_0_bounds[0].y) / 2
                _case_wall__part_0 = translate([-_case_wall__part_0_x, -_case_wall__part_0_y, 0], _case_wall__part_0);
                _case_wall__part_0 = rotate([0,0,0], _case_wall__part_0);
                _case_wall__part_0 = translate([_case_wall__part_0_x, _case_wall__part_0_y, 0], _case_wall__part_0);

                _case_wall__part_0 = translate([0,0,0], _case_wall__part_0);
                let result = _case_wall__part_0;
                
            
                    return result;
                }
            
            

                function _usb_wall_cutout_case_fn() {
                    

                // creating part 0 of case _usb_wall_cutout
                let _usb_wall_cutout__part_0 = _usb_wall_cutout_outline_extrude_34_outline_fn();

                // make sure that rotations are relative
                let _usb_wall_cutout__part_0_bounds = _usb_wall_cutout__part_0.getBounds();
                let _usb_wall_cutout__part_0_x = _usb_wall_cutout__part_0_bounds[0].x + (_usb_wall_cutout__part_0_bounds[1].x - _usb_wall_cutout__part_0_bounds[0].x) / 2
                let _usb_wall_cutout__part_0_y = _usb_wall_cutout__part_0_bounds[0].y + (_usb_wall_cutout__part_0_bounds[1].y - _usb_wall_cutout__part_0_bounds[0].y) / 2
                _usb_wall_cutout__part_0 = translate([-_usb_wall_cutout__part_0_x, -_usb_wall_cutout__part_0_y, 0], _usb_wall_cutout__part_0);
                _usb_wall_cutout__part_0 = rotate([270,0,0], _usb_wall_cutout__part_0);
                _usb_wall_cutout__part_0 = translate([_usb_wall_cutout__part_0_x, _usb_wall_cutout__part_0_y, 0], _usb_wall_cutout__part_0);

                _usb_wall_cutout__part_0 = translate([0,0,14], _usb_wall_cutout__part_0);
                let result = _usb_wall_cutout__part_0;
                
            
                    return result;
                }
            
            

                function _trrs_cutout_case_fn() {
                    

                // creating part 0 of case _trrs_cutout
                let _trrs_cutout__part_0 = _trrs_cutout_outline_extrude_34_outline_fn();

                // make sure that rotations are relative
                let _trrs_cutout__part_0_bounds = _trrs_cutout__part_0.getBounds();
                let _trrs_cutout__part_0_x = _trrs_cutout__part_0_bounds[0].x + (_trrs_cutout__part_0_bounds[1].x - _trrs_cutout__part_0_bounds[0].x) / 2
                let _trrs_cutout__part_0_y = _trrs_cutout__part_0_bounds[0].y + (_trrs_cutout__part_0_bounds[1].y - _trrs_cutout__part_0_bounds[0].y) / 2
                _trrs_cutout__part_0 = translate([-_trrs_cutout__part_0_x, -_trrs_cutout__part_0_y, 0], _trrs_cutout__part_0);
                _trrs_cutout__part_0 = rotate([0,90,0], _trrs_cutout__part_0);
                _trrs_cutout__part_0 = translate([_trrs_cutout__part_0_x, _trrs_cutout__part_0_y, 0], _trrs_cutout__part_0);

                _trrs_cutout__part_0 = translate([0,0,16.1], _trrs_cutout__part_0);
                let result = _trrs_cutout__part_0;
                
            
                    return result;
                }
            
            

                function _case_standoff_case_fn() {
                    

                // creating part 0 of case _case_standoff
                let _case_standoff__part_0 = _case_standoff_outline_extrude_5_outline_fn();

                // make sure that rotations are relative
                let _case_standoff__part_0_bounds = _case_standoff__part_0.getBounds();
                let _case_standoff__part_0_x = _case_standoff__part_0_bounds[0].x + (_case_standoff__part_0_bounds[1].x - _case_standoff__part_0_bounds[0].x) / 2
                let _case_standoff__part_0_y = _case_standoff__part_0_bounds[0].y + (_case_standoff__part_0_bounds[1].y - _case_standoff__part_0_bounds[0].y) / 2
                _case_standoff__part_0 = translate([-_case_standoff__part_0_x, -_case_standoff__part_0_y, 0], _case_standoff__part_0);
                _case_standoff__part_0 = rotate([0,0,0], _case_standoff__part_0);
                _case_standoff__part_0 = translate([_case_standoff__part_0_x, _case_standoff__part_0_y, 0], _case_standoff__part_0);

                _case_standoff__part_0 = translate([0,0,0], _case_standoff__part_0);
                let result = _case_standoff__part_0;
                
            
                    return result;
                }
            
            

                function _case_screw_inserts_case_fn() {
                    

                // creating part 0 of case _case_screw_inserts
                let _case_screw_inserts__part_0 = _case_screw_inserts_outline_extrude_5_outline_fn();

                // make sure that rotations are relative
                let _case_screw_inserts__part_0_bounds = _case_screw_inserts__part_0.getBounds();
                let _case_screw_inserts__part_0_x = _case_screw_inserts__part_0_bounds[0].x + (_case_screw_inserts__part_0_bounds[1].x - _case_screw_inserts__part_0_bounds[0].x) / 2
                let _case_screw_inserts__part_0_y = _case_screw_inserts__part_0_bounds[0].y + (_case_screw_inserts__part_0_bounds[1].y - _case_screw_inserts__part_0_bounds[0].y) / 2
                _case_screw_inserts__part_0 = translate([-_case_screw_inserts__part_0_x, -_case_screw_inserts__part_0_y, 0], _case_screw_inserts__part_0);
                _case_screw_inserts__part_0 = rotate([0,0,0], _case_screw_inserts__part_0);
                _case_screw_inserts__part_0 = translate([_case_screw_inserts__part_0_x, _case_screw_inserts__part_0_y, 0], _case_screw_inserts__part_0);

                _case_screw_inserts__part_0 = translate([0,0,0], _case_screw_inserts__part_0);
                let result = _case_screw_inserts__part_0;
                
            
                    return result;
                }
            
            

                function lifted_tented_case_case_fn() {
                    

                // creating part 0 of case lifted_tented_case
                let lifted_tented_case__part_0 = _tented_case_base_extrude_4_outline_fn();

                // make sure that rotations are relative
                let lifted_tented_case__part_0_bounds = lifted_tented_case__part_0.getBounds();
                let lifted_tented_case__part_0_x = lifted_tented_case__part_0_bounds[0].x + (lifted_tented_case__part_0_bounds[1].x - lifted_tented_case__part_0_bounds[0].x) / 2
                let lifted_tented_case__part_0_y = lifted_tented_case__part_0_bounds[0].y + (lifted_tented_case__part_0_bounds[1].y - lifted_tented_case__part_0_bounds[0].y) / 2
                lifted_tented_case__part_0 = translate([-lifted_tented_case__part_0_x, -lifted_tented_case__part_0_y, 0], lifted_tented_case__part_0);
                lifted_tented_case__part_0 = rotate([0,0,0], lifted_tented_case__part_0);
                lifted_tented_case__part_0 = translate([lifted_tented_case__part_0_x, lifted_tented_case__part_0_y, 0], lifted_tented_case__part_0);

                lifted_tented_case__part_0 = translate([0,0,4], lifted_tented_case__part_0);
                let result = lifted_tented_case__part_0;
                
            

                // creating part 1 of case lifted_tented_case
                let lifted_tented_case__part_1 = _case_base_board_extrude_100_outline_fn();

                // make sure that rotations are relative
                let lifted_tented_case__part_1_bounds = lifted_tented_case__part_1.getBounds();
                let lifted_tented_case__part_1_x = lifted_tented_case__part_1_bounds[0].x + (lifted_tented_case__part_1_bounds[1].x - lifted_tented_case__part_1_bounds[0].x) / 2
                let lifted_tented_case__part_1_y = lifted_tented_case__part_1_bounds[0].y + (lifted_tented_case__part_1_bounds[1].y - lifted_tented_case__part_1_bounds[0].y) / 2
                lifted_tented_case__part_1 = translate([-lifted_tented_case__part_1_x, -lifted_tented_case__part_1_y, 0], lifted_tented_case__part_1);
                lifted_tented_case__part_1 = rotate([0,0,0], lifted_tented_case__part_1);
                lifted_tented_case__part_1 = translate([lifted_tented_case__part_1_x, lifted_tented_case__part_1_y, 0], lifted_tented_case__part_1);

                lifted_tented_case__part_1 = translate([0,0,0], lifted_tented_case__part_1);
                result = result.subtract(lifted_tented_case__part_1);
                
            

                // creating part 2 of case lifted_tented_case
                let lifted_tented_case__part_2 = _case_base_board_extrude_3_outline_fn();

                // make sure that rotations are relative
                let lifted_tented_case__part_2_bounds = lifted_tented_case__part_2.getBounds();
                let lifted_tented_case__part_2_x = lifted_tented_case__part_2_bounds[0].x + (lifted_tented_case__part_2_bounds[1].x - lifted_tented_case__part_2_bounds[0].x) / 2
                let lifted_tented_case__part_2_y = lifted_tented_case__part_2_bounds[0].y + (lifted_tented_case__part_2_bounds[1].y - lifted_tented_case__part_2_bounds[0].y) / 2
                lifted_tented_case__part_2 = translate([-lifted_tented_case__part_2_x, -lifted_tented_case__part_2_y, 0], lifted_tented_case__part_2);
                lifted_tented_case__part_2 = rotate([0,0,0], lifted_tented_case__part_2);
                lifted_tented_case__part_2 = translate([lifted_tented_case__part_2_x, lifted_tented_case__part_2_y, 0], lifted_tented_case__part_2);

                lifted_tented_case__part_2 = translate([0,0,0], lifted_tented_case__part_2);
                result = result.union(lifted_tented_case__part_2);
                
            

                // creating part 3 of case lifted_tented_case
                let lifted_tented_case__part_3 = _case_wall_case_fn();

                // make sure that rotations are relative
                let lifted_tented_case__part_3_bounds = lifted_tented_case__part_3.getBounds();
                let lifted_tented_case__part_3_x = lifted_tented_case__part_3_bounds[0].x + (lifted_tented_case__part_3_bounds[1].x - lifted_tented_case__part_3_bounds[0].x) / 2
                let lifted_tented_case__part_3_y = lifted_tented_case__part_3_bounds[0].y + (lifted_tented_case__part_3_bounds[1].y - lifted_tented_case__part_3_bounds[0].y) / 2
                lifted_tented_case__part_3 = translate([-lifted_tented_case__part_3_x, -lifted_tented_case__part_3_y, 0], lifted_tented_case__part_3);
                lifted_tented_case__part_3 = rotate([0,0,0], lifted_tented_case__part_3);
                lifted_tented_case__part_3 = translate([lifted_tented_case__part_3_x, lifted_tented_case__part_3_y, 0], lifted_tented_case__part_3);

                lifted_tented_case__part_3 = translate([0,0,0], lifted_tented_case__part_3);
                result = result.union(lifted_tented_case__part_3);
                
            

                // creating part 4 of case lifted_tented_case
                let lifted_tented_case__part_4 = _usb_wall_cutout_case_fn();

                // make sure that rotations are relative
                let lifted_tented_case__part_4_bounds = lifted_tented_case__part_4.getBounds();
                let lifted_tented_case__part_4_x = lifted_tented_case__part_4_bounds[0].x + (lifted_tented_case__part_4_bounds[1].x - lifted_tented_case__part_4_bounds[0].x) / 2
                let lifted_tented_case__part_4_y = lifted_tented_case__part_4_bounds[0].y + (lifted_tented_case__part_4_bounds[1].y - lifted_tented_case__part_4_bounds[0].y) / 2
                lifted_tented_case__part_4 = translate([-lifted_tented_case__part_4_x, -lifted_tented_case__part_4_y, 0], lifted_tented_case__part_4);
                lifted_tented_case__part_4 = rotate([0,0,0], lifted_tented_case__part_4);
                lifted_tented_case__part_4 = translate([lifted_tented_case__part_4_x, lifted_tented_case__part_4_y, 0], lifted_tented_case__part_4);

                lifted_tented_case__part_4 = translate([0,0,0], lifted_tented_case__part_4);
                result = result.subtract(lifted_tented_case__part_4);
                
            

                // creating part 5 of case lifted_tented_case
                let lifted_tented_case__part_5 = _trrs_cutout_case_fn();

                // make sure that rotations are relative
                let lifted_tented_case__part_5_bounds = lifted_tented_case__part_5.getBounds();
                let lifted_tented_case__part_5_x = lifted_tented_case__part_5_bounds[0].x + (lifted_tented_case__part_5_bounds[1].x - lifted_tented_case__part_5_bounds[0].x) / 2
                let lifted_tented_case__part_5_y = lifted_tented_case__part_5_bounds[0].y + (lifted_tented_case__part_5_bounds[1].y - lifted_tented_case__part_5_bounds[0].y) / 2
                lifted_tented_case__part_5 = translate([-lifted_tented_case__part_5_x, -lifted_tented_case__part_5_y, 0], lifted_tented_case__part_5);
                lifted_tented_case__part_5 = rotate([0,0,0], lifted_tented_case__part_5);
                lifted_tented_case__part_5 = translate([lifted_tented_case__part_5_x, lifted_tented_case__part_5_y, 0], lifted_tented_case__part_5);

                lifted_tented_case__part_5 = translate([0,0,0], lifted_tented_case__part_5);
                result = result.subtract(lifted_tented_case__part_5);
                
            

                // creating part 6 of case lifted_tented_case
                let lifted_tented_case__part_6 = _case_standoff_case_fn();

                // make sure that rotations are relative
                let lifted_tented_case__part_6_bounds = lifted_tented_case__part_6.getBounds();
                let lifted_tented_case__part_6_x = lifted_tented_case__part_6_bounds[0].x + (lifted_tented_case__part_6_bounds[1].x - lifted_tented_case__part_6_bounds[0].x) / 2
                let lifted_tented_case__part_6_y = lifted_tented_case__part_6_bounds[0].y + (lifted_tented_case__part_6_bounds[1].y - lifted_tented_case__part_6_bounds[0].y) / 2
                lifted_tented_case__part_6 = translate([-lifted_tented_case__part_6_x, -lifted_tented_case__part_6_y, 0], lifted_tented_case__part_6);
                lifted_tented_case__part_6 = rotate([0,0,0], lifted_tented_case__part_6);
                lifted_tented_case__part_6 = translate([lifted_tented_case__part_6_x, lifted_tented_case__part_6_y, 0], lifted_tented_case__part_6);

                lifted_tented_case__part_6 = translate([0,0,0], lifted_tented_case__part_6);
                result = result.union(lifted_tented_case__part_6);
                
            

                // creating part 7 of case lifted_tented_case
                let lifted_tented_case__part_7 = _case_screw_inserts_case_fn();

                // make sure that rotations are relative
                let lifted_tented_case__part_7_bounds = lifted_tented_case__part_7.getBounds();
                let lifted_tented_case__part_7_x = lifted_tented_case__part_7_bounds[0].x + (lifted_tented_case__part_7_bounds[1].x - lifted_tented_case__part_7_bounds[0].x) / 2
                let lifted_tented_case__part_7_y = lifted_tented_case__part_7_bounds[0].y + (lifted_tented_case__part_7_bounds[1].y - lifted_tented_case__part_7_bounds[0].y) / 2
                lifted_tented_case__part_7 = translate([-lifted_tented_case__part_7_x, -lifted_tented_case__part_7_y, 0], lifted_tented_case__part_7);
                lifted_tented_case__part_7 = rotate([0,0,0], lifted_tented_case__part_7);
                lifted_tented_case__part_7 = translate([lifted_tented_case__part_7_x, lifted_tented_case__part_7_y, 0], lifted_tented_case__part_7);

                lifted_tented_case__part_7 = translate([0,0,0], lifted_tented_case__part_7);
                result = result.subtract(lifted_tented_case__part_7);
                
            
                    return result;
                }
            
            
        
            function main() {
                return lifted_tented_case_case_fn();
            }

        