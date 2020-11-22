class ContactsController < ApplicationController
  before_action :authenticate_user!, :except => [:create]
  before_action :set_contact, only: [:show, :edit, :update, :destroy]

  # GET /contacts
  # GET /contacts.json
  def index
    @contacts = Contact.all
    render json: @contacts
  end
  
  # GET /contacts/1
  # GET /contacts/1.json
  def show
    render json: @contact
  end

  # GET /contacts/new
  def new
    @contact = Contact.new
  end

  # GET /contacts/1/edit
  def edit
  end

  # POST /contacts
  # POST /contacts.json
  def create
    @contact = Contact.create!(contact_params)
    render json: Contact.all
  end

  # PATCH/PUT /contacts/1
  # PATCH/PUT /contacts/1.json
  def update
    @contact.update(contact_params)
    if @contact.valid?
      render json: @contact
    end
  end

  # DELETE /contacts/1
  # DELETE /contacts/1.json
  def destroy
    @contact.destroy
      render json:Contact.all
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_contact
      @contact = Contact.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def contact_params
      params.require(:contact).permit(:title, 
                                    :body,
                                    :name,
                                    :phone,
                                    :email,
                                    :status,
                                    :id,
                                    :created_at,
                                    :updated_at)
    end
end
