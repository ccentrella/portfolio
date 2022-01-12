require "test_helper"

class StaticPagesControllerTest < ActionDispatch::IntegrationTest
  test "should get home" do
    get root_url
    assert_response :success
  end

  test "should get about" do
    get about_url
    assert_response :success
  end

  test "should get mission" do
    get mission_url
    assert_response :success
  end

  test "should get contact" do
    get contact_url
    assert_response :success
  end
end
