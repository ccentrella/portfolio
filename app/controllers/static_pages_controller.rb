class StaticPagesController < ApplicationController
  def home
    render text: "Hello world."
  end

  def about
  end

  def mission
  end

  def contact
  end
end
