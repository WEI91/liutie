'use strict'

require('./index.css');
var _mm = require('util/mm.js');
var _user = require('service/user-service.js');
var _cart = require('service/cart-service.js');

var nav = {
	init: function(){
		this.bindEvent();
		this.loadUserInfo();
		this.loadCartCount();
		return this;
	},
	bindEvent:function(){
		$('.js-login').click(function(){
			_mm.doLogin();
			console.log(123)
		})
		$('.js-register').click(function(){
			window.location.href = './user-center.html';
		})
		$('.js-login').click(function(){
			_user.logout();
		})
	},
	loadUserInfo:function(){
		_user.checkLogin(function(res){
			$('.user.not-login').hide().siblings('.user.login').show()
			.find('.username').text('res.username')
		},function(erMsg){

	});	
		

},
	loadCartCount:function(){
		_cart.getCartCount(function(res){
			$('.nav.cart-count').text(res || 0);
		},function(erMsg){
			$('.nav.cart-count').text(0);
		});

	}
}
module.exports = nav.init();