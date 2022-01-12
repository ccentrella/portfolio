require "test_helper"

class PostsControllerTest < ActionDispatch::IntegrationTest
  test "should get posts home" do
    get blog_url
    assert_response :success
    assert_select "title", text: "Blog | Chris Centrella"
  end
end