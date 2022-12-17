import ContentLoader from 'react-content-loader';

const DogSceleton = () => (
  <ContentLoader
    speed={2}
    width={400}
    height={460}
    viewBox="0 0 400 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="4" y="16" rx="2" ry="2" width="400" height="400" />
  </ContentLoader>
);

export default DogSceleton;
