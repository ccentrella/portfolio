# config/initializers/cors.rb

Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins ENV['CORS_ORIGINS']
    resource '*',
        headers: :any,
        methods: [:get, :post, :patch, :put, :delete, :options, :head],
        expose: [:Authorization]
  end
end