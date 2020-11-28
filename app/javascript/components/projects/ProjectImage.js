import React from 'react';
import ActiveStorageProvider from 'react-activestorage-provider'
import useRead from '../hooks/useRead'
import useUpdate from '../hooks/useUpdate'

const ProjectImage = (props) => {

  const [ project, setProject, projectLoading, projectError ] = useRead(`projects/${props.match.params.id}`)
  const [ updateProject ] = useUpdate(`projects/${props.match.params.id}`, props, `projects/${props.match.params.id}`)

  const handleSubmit = () => {
    updateProject(project)
  }

  if (projectLoading) {
    return <div>Loading...</div>
  }

  return ( 
    <React.Fragment>
      <h1>Project: {project.event_name} </h1>
        { project && project.photo_url &&
          <div >
            <h2>The photo is: </h2>
            <div style={photoStyle}>
            <img  src={project.photo_url} />
            </div>
          </div>
        }
        <ActiveStorageProvider
          endpoint={{
            path: `/projects/${project.id}`,
            model: 'Project',
            attribute: 'photo',
            method: 'PUT',
          }}
          onSubmit={handleSubmit}
          render={({ handleUpload, uploads, ready }) => (
            <div>
              <input
                type="file"
                disabled={!ready}
                onChange={e => handleUpload(e.currentTarget.files)}
              />
              {uploads.map(upload => {
                switch (upload.state) {
                  case 'waiting':
                    return <p key={upload.id}>Waiting to upload {upload.file.name}</p>
                  case 'uploading':
                    return (
                      <p key={upload.id}>
                        Uploading {upload.file.name}: {upload.progress}%
                      </p>
                    )
                  case 'error':
                    return (
                      <p key={upload.id}>
                        Error uploading {upload.file.name}: {upload.error}
                      </p>
                    )
                  case 'finished':
                    return (
                      <p key={upload.id}>Finished uploading {upload.file.name}</p>
                    )
                }
              })}
            </div>
            )}
          />
    </React.Fragment>
  );
}

export default ProjectImage;