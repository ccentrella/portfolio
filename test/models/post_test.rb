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
end
