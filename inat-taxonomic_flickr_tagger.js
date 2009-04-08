// ==UserScript==
// @name          iNaturalist Taxonomic Flickr Tagger
// @description   Adds "Add taxonomic tags from iNat" links to a Flickr photo page
// @namespace     http://inaturalist.org/taxa/flickr_tagger
// @include       http://flickr.com/photos/*
// @include       http://www.flickr.com/photos/*
// Based upon "Flickr on Black" by Simon Whitaker 
// (http://userscripts.org/scripts/show/9523)
// ==/UserScript==
(
  function(){
    if (document.getElementById("button_bar")) {
      pid = location.pathname.split('/')[3];

      var container = document.createElement("div");
      container.setAttribute("id", "taxaonomictagadder");
      container.setAttribute("style", "margin-top: 10px");
      var link = '<a href="http://inaturalist.org/taxa/flickr_tagger?flickr_photo_id=' + pid + '" style="text-decoration: none;" target="_new">Add taxonomic tags from iNaturalist.org</a>';
      container.innerHTML = link;

      var tagList = document.getElementsByClassName('TagList')[0];
      tagList.appendChild(container);
    }
  }
)();
