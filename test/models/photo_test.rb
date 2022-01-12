require "test_helper"

class PhotoTest < ActiveSupport::TestCase

  def setup
    @photo = photos(:one)
  end

  test "test should be valid" do
    assert @photo.valid?
  end

  test "image required" do
    @photo.path = nil
    assert_not @photo.valid?
  end

  test "user id required" do
    @photo.user_id = nil
    assert_not @photo.valid?
  end
  
end
