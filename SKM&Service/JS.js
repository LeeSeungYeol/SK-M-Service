var viz;

    function draw() {
        File_info_Json_Array = [];
        //config 형식에 맞춰어서 작성 
        var config = {
            container_id: "viz",
            server_url: "bolt://localhost:7687",
            server_user: "neo4j",
            server_password: "1234", // 자신의 비밀번호를 입력 
            arrow: true,
            labels: { 
               "Product": {
                   "caption": "title",
                   "size": "pid",
                   "community":"community"
                   //"sizeCypher": "MATCH (n) WHERE id(n) = {id} MATCH (n)-[r]-() RETURN sum(r.weight) AS c"
                }
              },
              relationships: {
                 "CO_PURCHASE":{
                     "caption": false,
                      "thickness": "weight"
                }
              },    
              // pid가 jsoned3 인 노드로 부터 1~ num 거리에 있는 것들을 최대 limit_num만큼 출력 
              initial_cypher: "MATCH p=()-[r:CO_PURCHASE*1.."+num+"]->(product : Product {pid : '"+ center_of_graph +"'}) RETURN p LIMIT "+limit_num+""

              			

        };
		
      cyphermethod= "MATCH p=()-[r:CO_PURCHASE*1.."+num+"]->(product : Product {pid : '"+ center_of_graph +"'}) RETURN p LIMIT "+limit_num+"";  
      viz = new NeoVis.default(config);
      console.log(viz._nodes);
      var forprint= JSON.stringify(viz._nodes);
      console.log(forprint);
      //  console.log(viz._nodes[48].title);
      //var ann = JSON.stringify(viz._nodes[28])['title'];
      //console.log(ann);
      hide_Info();
      hide_Length();
	    viz.render();
      
	}




  function draw_by_menu() {
        File_info_Json_Array = [];
        //config 형식에 맞춰어서 작성 
        center_of_graph=jsoned3;
        var config = {
            container_id: "viz",
            server_url: "bolt://localhost:7687",
            server_user: "neo4j",
            server_password: "1234", // 자신의 비밀번호를 입력 
            arrow: true,
            labels: { 
               "Product": {
                   "caption": "title",
                   "size": "pid",
                   "community":"community"
                   //"sizeCypher": "MATCH (n) WHERE id(n) = {id} MATCH (n)-[r]-() RETURN sum(r.weight) AS c"
                }
              },
              relationships: {
                 "CO_PURCHASE":{
                     "caption": false,
                      "thickness": "weight"
                }
              },    
              // pid가 jsoned3 인 노드로 부터 1~ num 거리에 있는 것들을 최대 limit_num만큼 출력 
              initial_cypher: "MATCH p=()-[r:CO_PURCHASE*1.."+num+"]->(product : Product {pid : '"+ center_of_graph +"'}) RETURN p LIMIT "+limit_num+""

                    

        };
      
      cyphermethod= "MATCH p=()-[r:CO_PURCHASE*1.."+num+"]->(product : Product {pid : '"+ center_of_graph +"'}) RETURN p LIMIT "+limit_num+"";
      viz = new NeoVis.default(config);
      
      hide_Info();
      hide_Length();
      viz.render();
      
  }
    /*
      이 함수는 검색 기능에 사용 된다 .
      edge를 출력 안하는 것이 특징이다. 
    */
    function draw_by_name() {
        File_info_Json_Array = [];
        var config = {
            container_id: "viz",
            server_url: "bolt://localhost:7687",
            server_user: "neo4j",
            server_password: "1234",
            labels: { 
               "Product": {
                   "caption": "title",
                   "size": "pid",
                   "community":"community"
                }
              },
              relationships: {
                 "CO_PURCHASE":{
                     "caption": false,
                      "thickness": "weight"
                }
              },    
              // Product title에 검색어가 있는 product를 개수 제한 없이 가져오는 역할 
              initial_cypher: "MATCH (product1:Product) WHERE product1.title CONTAINS \'"+search_text+"\' RETURN product1"


        };

      cyphermethod= "MATCH (product1:Product) WHERE product1.title CONTAINS \'"+search_text+"\' RETURN product1";
      viz = new NeoVis.default(config);

	  viz.render();
    }


    function draw_Union() {
        File_info_Json_Array = [];
        cyphermethod += " UNION MATCH p=()-[r:CO_PURCHASE*1.."+num+"]->(product : Product {pid : '"+ jsoned3 +"'}) RETURN p LIMIT "+limit_num+"";
        //config 형식에 맞춰어서 작성 
        var config = {
            container_id: "viz",
            server_url: "bolt://localhost:7687",
            server_user: "neo4j",
            server_password: "1234", // 자신의 비밀번호를 입력 
            arrow: true,
            labels: { 
               "Product": {
                   "caption": "title",
                   "size": "pid",
                   "community":"community"
                   //"sizeCypher": "MATCH (n) WHERE id(n) = {id} MATCH (n)-[r]-() RETURN sum(r.weight) AS c"
                }
              },
              relationships: {
                 "CO_PURCHASE":{
                     "caption": false,
                      "thickness": "weight"
                }
              },    
              // pid가 jsoned3 인 노드로 부터 1~ num 거리에 있는 것들을 최대 limit_num만큼 출력 
              initial_cypher: cyphermethod

                    

        };
    
        
      viz = new NeoVis.default(config);
      console.log(viz._nodes);
      var forprint= JSON.stringify(viz._nodes);
      console.log(forprint);
      //  console.log(viz._nodes[48].title);
      //var ann = JSON.stringify(viz._nodes[28])['title'];
      //console.log(ann);
      hide_Info();
      hide_Length();
      viz.render();
      
  }
    


    function hide_Info(){
      $(".jb-footer").hide();
    }
    function show_Info(){
      $(".jb-footer").slideToggle(300,"linear");
    }

    function hide_Info_Smoothly(){
      $(".jb-footer").slideUp(300,"linear");
    }
    function hide_Length(){
      $(".jb-length").hide();
    }
    function show_Length(){
      $(".jb-length").slideToggle(300,"linear");
    }

    function hide_Length_Smoothly(){
      $(".jb-length").slideUp(300,"linear");
    }

  function search_tool_internet(){
    window.open('about:blank').location.href="https://www.google.com/search?ei=8M4vXbq3Bc-zmAWIgKVQ&q="+searched+"+&oq="+searched+"&gs_l=psy-ab.3..35i39j0i20i263j0l8.643015.654481..654637...13.0..1.104.956.9j1......0....1..gws-wiz.....10..0i71j0i67j0i10j0i131i20i263j0i131.XXEsDrrQABs&ved=0ahUKEwi67_v6q73jAhXPGaYKHQhACQoQ4dUDCAo&uact=5";
    //새탭에서 검색 결과가 나오도록 한다. 

  }

  function making_Excel(){
    console.log(File_info_Json_Array);

    $("#dvjson").excelexportjs({
                    containerid: "dvjson"
                       , datatype: 'json'
                       , dataset: File_info_Json_Array
                       , columns: getColumns(File_info_Json_Array)     
                });

    var _gaq = _gaq || [];


  _gaq.push(['_setAccount', 'UA-36251023-1']);
  _gaq.push(['_setDomainName', 'jqueryscript.net']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
  }




