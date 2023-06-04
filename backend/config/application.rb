require_relative "boot"
require "rails/all"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

# Base configuration goes here. Settings can be overridden in specific environments
# using the files in config/environments, which are processed later.

module Portfolio
  class Application < Rails::Application

    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 7.0

    config.api_only = true
    config.time_zone = 'Eastern Time (US & Canada)'

    # Load images in emails
    config.action_mailer.asset_host = 'https://chriscentrella.com'

    # Configure autoloading and eager loading
    # config.eager_load_paths << Rails.root.join("extras")
  end
end
