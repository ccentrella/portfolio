class StaticPagesController < ApplicationController
  def home
    render :layout => false
  end

  def about
  end

  def mission
  end

  def contact
  end
end
