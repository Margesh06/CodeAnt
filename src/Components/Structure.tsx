import {PropsWithChildren} from 'react';
import Menubar from "./Menubar.tsx";

const Structure = ({children}:PropsWithChildren) => {
    return (
        <div className={`flex w-full h-full flex-col md:flex-row`}>
            <Menubar />
           <div className={`h-screen w-full box-border overflow-y-auto`}>
               {children}
           </div>
        </div>
    );
};

export default Structure;