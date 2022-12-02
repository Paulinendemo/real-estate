class BuyersController < ApplicationController

        rescue_from ActiveRecord::RecordNotFound, :with => :record_not_found

        rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

        def index
            buyers = Buyer.all
            render json: buyers
        end
    
      
    
        def create
            buyer = Buyer.create!(user_params)
            session[:buyer_id] = buyer.id
            render json: {errors: buyer.errors.full_messages}, status: :unprocessable_entity
        end
    
        def show
            buyer = Buyer.find_by(id: session[:user_id])
            if buyer
                render json: buyer, only: [:id, :username, :password], serializer: PropertyAndBuyerSerializer, status: :ok
            else
                render json: {error: "Not authorized"}, status: :unauthorized
            end
        end

        def destroy
            buyer = Buyer.find(params[:id])
            buyer.destroy
            render json: buyer, status: :ok
        end
    
        private
        def user_params
            params.permit(:username, :email, :password, :password_confirmation)
        end
    

        def render_unprocessable_entity_response(invalid)
            render json: { errors: invalid.record.errors }, status: :unprocessable_entity
        end
    

        def record_not_found
            render json: { error: "Buyer not found" }, status: :not_found
        end

end
