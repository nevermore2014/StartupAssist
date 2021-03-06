var StartupAssist = StartupAssist || {};


StartupAssist.updateTagInit = function(canva_id){
  var all_tag = $('.tag'),
      tag_array = [];
  for (i = 0; i < all_tag.length; i++){
    tag_array[i] = {};
    tag_array[i].id = all_tag[i].id,
    tag_array[i]['class'] = all_tag[i].getAttributeNS(null, 'class');
    tag_array[i].rect = {};
    tag_array[i].rect['class'] = all_tag[i].getElementsByTagName("rect")[0].getAttributeNS(null, 'class');
    tag_array[i].rect.x = all_tag[i].getElementsByTagName("rect")[0].getAttributeNS(null, 'x');
    tag_array[i].rect.y = all_tag[i].getElementsByTagName("rect")[0].getAttributeNS(null, 'y');
    tag_array[i].rect.height = all_tag[i].getElementsByTagName("rect")[0].getAttributeNS(null, 'height');
    tag_array[i].rect.width = all_tag[i].getElementsByTagName("rect")[0].getAttributeNS(null, 'width');
    tag_array[i].rect.onmousedown = all_tag[i].getElementsByTagName("rect")[0].getAttributeNS(null, 'onmousedown');
    tag_array[i].rect.transform = all_tag[i].getElementsByTagName("rect")[0].getAttributeNS(null, 'transform');
    tag_array[i].rect.style = all_tag[i].getElementsByTagName("rect")[0].getAttributeNS(null, 'style');
    tag_array[i].txt = {};
    tag_array[i].txt['class'] = all_tag[i].getElementsByTagName("text")[0].getAttributeNS(null, 'class');
    tag_array[i].txt.x = all_tag[i].getElementsByTagName("text")[0].getAttributeNS(null, 'x');
    tag_array[i].txt.y = all_tag[i].getElementsByTagName("text")[0].getAttributeNS(null, 'y');
    tag_array[i].txt.width = all_tag[i].getElementsByTagName("text")[0].getAttributeNS(null, 'width');
    tag_array[i].txt.onmousedown = all_tag[i].getElementsByTagName("text")[0].getAttributeNS(null, 'onmousedown');
    tag_array[i].txt.transform = all_tag[i].getElementsByTagName("text")[0].getAttributeNS(null, 'transform');
    tag_array[i].txt.style = all_tag[i].getElementsByTagName("text")[0].getAttributeNS(null, 'style');
    tag_array[i].txt.inner = all_tag[i].getElementsByTagName("text")[0].innerHTML;

    tag_array[i].circle = {};
    tag_array[i].circle.cx = all_tag[i].getElementsByTagName("circle")[0].getAttributeNS(null, 'cx');
    tag_array[i].circle.cy = all_tag[i].getElementsByTagName("circle")[0].getAttributeNS(null, 'cy');
    tag_array[i].circle.transform = all_tag[i].getElementsByTagName("circle")[0].getAttributeNS(null, "transform");
  }
  for(k = 0; k < tag_array.length; k++){
    StartupAssist.updateTag(tag_array[k], canva_id);
  }

};

StartupAssist.updateTag = function(tag, the_id){
  var tag_id = parseInt(tag.id.split('-')[2]);
  $.ajax({
    url: '/canvas/' + the_id + '/tags/' + tag_id,
    type: 'PATCH',
    dataType: 'json',
    data: { canva_id: the_id, tag_id_int: tag_id, tag: { tag_id: tag.id, tag_class: tag.class, rect_class: tag.rect.class, rect_height: tag.rect.height, rect_onmousedown:tag.rect.onmousedown, rect_style: tag.rect.style, rect_transform: tag.rect.transform, rect_width: tag.rect.width, rect_x: tag.rect.x, rect_y: tag.rect.y, txt_class: tag.txt.class, txt_inner: tag.txt.inner, txt_onmousedown: tag.txt.onmousedown, txt_style: tag.txt.style, txt_transform:tag.txt.transform, txt_width: tag.txt.width, txt_x: tag.txt.x, txt_y: tag.txt.y, circle_cx: tag.circle.cx, circle_cy: tag.circle.cy, circle_transform: tag.circle.transform } },
  })
  .done(function(response) {
    console.log(response);
  })
  .fail(function() {
    console.log("error");
  })
  .always(function() {
    console.log("complete");
  });
};
