var viz;

    function draw() {
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
		    console.log(num);
        console.log(jsoned3);
        console.log(limit_num);
        
      viz = new NeoVis.default(config);
      hide_Info();
      hide_Length();
	    viz.render();
      
	}




  function draw_by_menu() {
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
        console.log(num);
        console.log(jsoned3);
        console.log(limit_num);
        
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


      viz = new NeoVis.default(config);

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
    location.href="https://www.google.com/search?ei=8M4vXbq3Bc-zmAWIgKVQ&q="+searched+"+&oq="+searched+"&gs_l=psy-ab.3..35i39j0i20i263j0l8.643015.654481..654637...13.0..1.104.956.9j1......0....1..gws-wiz.....10..0i71j0i67j0i10j0i131i20i263j0i131.XXEsDrrQABs&ved=0ahUKEwi67_v6q73jAhXPGaYKHQhACQoQ4dUDCAo&uact=5";
    location.target="_black";

  }
   



