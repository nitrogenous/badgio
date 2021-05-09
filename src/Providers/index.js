import { BadgeCreatorProvider } from './BadgeCreator';

export const Providers = ({ children }) => {
  return(<>
    <BadgeCreatorProvider>
      {children}
    </BadgeCreatorProvider>
  </>);
};
