import MainNavigation from './main-navigation';

const Layout: React.FC = ({ children }) => {
    return (
        <div>
            <MainNavigation />
            <main>{children}</main>
        </div>
    );
};

export default Layout;
