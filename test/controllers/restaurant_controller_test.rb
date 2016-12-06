require 'test_helper'

class RestaurantControllerTest < ActionDispatch::IntegrationTest
  test "should get home" do
    get restaurant_home_url
    assert_response :success
  end

  test "should get login" do
    get restaurant_login_url
    assert_response :success
  end

  test "should get checkLogin" do
    get restaurant_checkLogin_url
    assert_response :success
  end

  test "should get logout" do
    get restaurant_logout_url
    assert_response :success
  end

end
