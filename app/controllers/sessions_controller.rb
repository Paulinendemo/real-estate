class SessionsController < ApplicationController
    def create
        buyer = Buyer.find_by(username: params[:username])
        if buyer && buyer.authenticate(params[:password])
            session[:buyer_id] = buyer_id
            render json: buyer
        else
            render json: {
                error: "Invalid Username and Password"
            }, status: :unauthorized
        end
    end

    def destroy
        session.delete :buyer_id
        head :no_content
    end
end
