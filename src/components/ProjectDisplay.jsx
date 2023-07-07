import React from "react";

function ProjectDisplay() {
  return (
    <div className="projects-container">
      <ProjectItem image="https://mir-s3-cdn-cf.behance.net/project_modules/1400/a9c173118524651.6273b76f3389d.png"></ProjectItem>
      <ProjectItem image="https://avatars.githubusercontent.com/u/114043085?s=64&v=4"></ProjectItem>
      <ProjectItem image="https://mir-s3-cdn-cf.behance.net/project_modules/fs/df92c3172522975.648098877062e.png"></ProjectItem>
      <ProjectItem image="https://www.nicepng.com/png/detail/981-9813175_c-logo-c-programming-language-logo.png"></ProjectItem>
      <ProjectItem image="https://github.com/ConnorDelacruz14/CrossOut/blob/master/client/src/assets/icon.png?raw=true"></ProjectItem>
      <ProjectItem image="https://i.pinimg.com/736x/1c/54/f7/1c54f7b06d7723c21afc5035bf88a5ef--branding.jpg"></ProjectItem>
      <ProjectItem image="https://user-images.githubusercontent.com/63576585/216832969-94d24942-e016-4e5a-9b09-9b2227abb90d.jpg"></ProjectItem>
      <ProjectItem image="https://mir-s3-cdn-cf.behance.net/project_modules/1400/0f421c118524651.627128d73c284.png"></ProjectItem>
    </div>
  );
}

function ProjectItem(props) {
  return (
    <div className="project-item">
      <img alt="" src={props.image}></img>
      <div className="item-desc"></div>
    </div>
  );
}

export default ProjectDisplay;
