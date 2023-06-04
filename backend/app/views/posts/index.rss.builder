xml.instruct! :xml, :version => "1.0"
xml.rss :version => "2.0" do
  xml.channel do
    xml.title "Chris Centrella"
    xml.description "Chris's personal blog"
    xml.link root_url

    @posts.each do |post|
      xml.item do
        xml.title post.title
        xml.description post.content
        xml.pubDate post.get_date
        xml.link post_url(post)
        xml.guid post_url(post)
      end
    end
  end
end