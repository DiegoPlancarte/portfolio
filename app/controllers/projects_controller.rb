class ProjectsController < ApplicationController

  # GET /projects
  # GET /projects.json
  def index
    @projects = Project.all
    render json: @projects
  end
  
  # GET /projects/1
  # GET /projects/1.json
  def show
    render json: @project
  end

  # GET /projects/new
  def new
    @project = Project.new
  end

  # GET /projects/1/edit
  def edit
  end

  # POST /projects
  # POST /projects.json
  def create
    @project = Project.create!(project_params)
    render json: Project.all
  end

  # PATCH/PUT /projects/1
  # PATCH/PUT /projects/1.json
  def update
    @project.update(project_params)
    if @project.valid?
      render json: @project
    end
  end

  # DELETE /projects/1
  # DELETE /projects/1.json
  def destroy
    @project.destroy
      render json:Project.all
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_project
      @project = Project.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def project_params
      params.require(:project).permit(:title, 
                                    :description,
                                    :id,
                                    :created_at,
                                    :updated_at)
    end
end