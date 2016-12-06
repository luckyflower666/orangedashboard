class RestaurantController < ApplicationController
  def home
  	@user = session['loginedUser']
    @userid=session['loginedUser_id']



    @menus = Menu.all
  end

  def login

  end

  def checkLogin
  	@user = User.find_by_restaurant(params[:user][:restaurant])
  	if @user != nil && @user[:password] == params[:user][:password]
  		session['loginedUser'] = @user.restaurant
      session['loginedUser_id'] = @user.id
      session['loginedUser_name'] = @user.name
      session['loginedUser_email'] = @user.email
      session['loginedUser_tele'] = @user.telephone
  		redirect_to :controller=>'restaurant',:action=>'home'
  	else
  		session['loginedUser'] = nil
  	#	redirect_to :controller=>'restaurant',:action=>'login'
  	end
  end

  def logout
  	session['loginedUser'] = nil
  	redirect_to :controller=>'restaurant',:action=>'home'
  end

  def show
    @user = session['loginedUser']
    @userid=session['loginedUser_id']
    @username=session['loginedUser_name']
    @useremail=session['loginedUser_email']
    @usertele=session['loginedUser_tele']
  end
end
