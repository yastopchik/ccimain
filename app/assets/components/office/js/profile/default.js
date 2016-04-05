Office.Profile = {

	initialize: function(selector) {
		var elem = $(selector);
		if (!elem.length) {return false;}

		// Disable elements during ajax request
		$(document).ajaxStart(function() {
			elem.find('button, a, input, select, textarea').attr('disabled', true).addClass('tmp-disabled');
		})
		.ajaxStop(function() {
			elem.find('.tmp-disabled').attr('disabled', false);
		});

		$(document).on('click', '#office-user-photo-remove', function(e) {
			e.preventDefault();
			Office.Profile.clearPhoto(elem);
			elem.submit();
			return false;
		});

		$(document).on('submit', selector, function(e) {
			$(this).ajaxSubmit({
				url: OfficeConfig.actionUrl
				,dataType: 'json'
				,beforeSubmit: function(data) {
					Office.Message.close();
					$(selector + ' .desc').show();
					$(selector + ' .message').text('');
					$(selector + ' .has-error').removeClass('has-error');
					data.push({name: 'action', value:'Profile/Update'});
					data.push({name: 'pageId', value: OfficeConfig.pageId});
				}
				,success: function(response) {
					var i;
					if (response.success) {
						Office.Message.success(response.message);
						Office.Profile.clearPhoto(elem);
						if (response.data) {
							for (i in response.data) {
								if (response.data.hasOwnProperty(i)) {
									$(selector + ' [name="'+i+'"]').val(response.data[i]);
									if (i == 'photo') {
										var $photo = $('#profile-user-photo');
										if (response.data[i] != '') {
											$photo.prop('src', response.data[i]);
											$('#office-user-photo-remove').show();
										}
										else {
											$photo.prop('src', $photo.data('gravatar'));
											$('#office-user-photo-remove').hide();
										}
									}
									else if (i == 'extended') {
										for (var i2 in response.data[i]) {
											if (response.data[i].hasOwnProperty(i2)) {
												$(selector + ' [name="extended['+i2+']"]').val(response.data[i][i2]);
											}
										}
									}
								}
							}
						}
					}
					else {
						Office.Message.error(response.message, false);
						if (response.data) {
							for (i in response.data) {
								if (response.data.hasOwnProperty(i)) {
									var $parent = $(selector + ' [name="'+i+'"]').parent();
									$parent.addClass('has-error');
									$parent.find('.desc').hide();
									$parent.find('.message').text(response.data[i]);
								}
							}
						}
					}
				}
			});
			return false;
		});

		return true;
	}

	,clearPhoto: function(elem) {
		var $newphoto = elem.find('input[name="newphoto"]');
		$newphoto.val('').replaceWith($newphoto.clone(true));
		elem.find('input[name="photo"]').attr('value', '');
	}

};

Office.Profile.initialize('#office-profile-form');