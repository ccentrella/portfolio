require "test_helper"

class PostTest < ActiveSupport::TestCase

  def setup
    @post = posts(:one)
  end 

  test "should be valid" do
    assert @post.valid?
  end

  test "title should be present" do
    @post.title = nil
    assert_not @post.valid?
  end

  test "user id should be present" do
    @post.user_id = nil
    assert_not @post.valid?
  end

  test "most recent posts should come first" do
    assert_equal posts(:two), Post.first
  end
end
