class StaticPagesController < ApplicationController
  def home
    render layout: "no-flash-header"
  end

  def about
  end

  def contact
  end
end
