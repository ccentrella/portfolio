module RecaptchaHelper

    # Send client recaptcha response to Recaptcha API and verify validity
    def verify_recaptcha(response_token)
        uri = URI('https://www.google.com/recaptcha/api/siteverify')
        data = Net::HTTP.post_form(uri, 'response' => response_token, 'secret' => ENV['RECAPTCHA_SECRET_KEY_V3'])
        body = JSON.parse(data.body) if data.is_a?(Net::HTTPSuccess)

        if body.nil?
            :service_unavailable
        elsif body['success'] && body['score'] >= 0.5
            :ok
        else
            :bad_request
        end
    end
end
