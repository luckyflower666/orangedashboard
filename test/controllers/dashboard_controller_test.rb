require 'test_helper'

class DashboardControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get dashboard_index_url
    assert_response :success
  end

  test "should get gov" do
    get dashboard_gov_url
    assert_response :success
  end

  test "should get orange" do
    get dashboard_orange_url
    assert_response :success
  end

end
