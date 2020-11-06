document.addEventListener('DOMContentLoaded', function() {
    chrome.tabs.getSelected(null, function(tab) {
        document.getElementById("title-article").innerHTML = tab.title;
        var currentdate = new Date(); 
        //get domain
        var url = tab.url;
        var urlParts = url.replace('http://','').replace('https://','').split(/[/?#]/);
        var domain = urlParts[0];

        //favicon
        document.getElementById("favi").src="https://s2.googleusercontent.com/s2/favicons?domain="+tab.url;
        
        //display domain
        
        document.getElementById("date").innerHTML = domain;

        //ajax call + display summary
        $.ajax({
            type:"GET",
            dataType: "json",
            url: "http://3.25.245.46:5000/summarize?url=" + tab.url,
            success: function(data){
                document.getElementById("content").innerHTML = data.summary_article;
                
            }
        })
        });
        
  }, false);