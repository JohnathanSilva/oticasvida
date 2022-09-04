import React from 'react';

import { BannerSection } from '../BannerSection';
import { CompanySection } from '../CompanySection';
import { ContactsSection } from '../ContactsSection';
import { ProductSection } from '../ProductSection';

export function Content(){
    return(
        <div>
            <BannerSection />
            <ProductSection />
            <CompanySection />
            <ContactsSection />
        </div>
    );
} 