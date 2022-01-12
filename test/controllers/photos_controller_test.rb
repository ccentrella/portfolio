require "test_helper"

class PhotosControllerTest < ActionDispatch::IntegrationTest
  test "should get photos home" do
    get photos_url
    assert_response :success
    assert_select "title", "Gallery | Chris Centrella"
  end
end
