class UsersController < ApplicationController

  def new
  	@user = User.new
  end

  def create
  	params.permit!
  	@user = User.new(params[:user])
  	if @user.save
  		session['loginedUser'] = @user.restaurant
      session['loginedUser_id'] = @user.id
      session['loginedUser_name'] = @user.name
      session['loginedUser_email'] = @user.email
      session['loginedUser_tele'] = @user.telephone
  		redirect_to :controller=>'restaurant',:action=>'home'
  	else
  		redirect_to :controller=>'restaurant',:action=>'registration'
  	end

 
    
  end
end
