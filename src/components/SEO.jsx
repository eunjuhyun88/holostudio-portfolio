import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SEO = ({ 
    title, 
    description, 
    image, 
    type = 'website', 
    schema 
}) => {
    const location = useLocation();
    const url = window.location.origin + location.pathname;
    const siteTitle = 'HOLO STUDIO';
    const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;

    useEffect(() => {
        // Update Title
        document.title = fullTitle;

        // Helper to update or create meta tag
        const updateMeta = (name, content) => {
            if (!content) return;
            let tag = document.querySelector(`meta[name="${name}"]`);
            if (!tag) {
                tag = document.createElement('meta');
                tag.setAttribute('name', name);
                document.head.appendChild(tag);
            }
            tag.setAttribute('content', content);
        };

        // Helper for OG tags
        const updateOg = (property, content) => {
            if (!content) return;
            let tag = document.querySelector(`meta[property="${property}"]`);
            if (!tag) {
                tag = document.createElement('meta');
                tag.setAttribute('property', property);
                document.head.appendChild(tag);
            }
            tag.setAttribute('content', content);
        };

        // Update Meta Tags
        updateMeta('description', description);
        
        // Update Open Graph
        updateOg('og:title', fullTitle);
        updateOg('og:description', description);
        updateOg('og:url', url);
        updateOg('og:type', type);
        updateOg('og:site_name', siteTitle);
        if (image) updateOg('og:image', image);

        // Update Twitter Card
        updateMeta('twitter:card', 'summary_large_image');
        updateMeta('twitter:title', fullTitle);
        updateMeta('twitter:description', description);
        if (image) updateMeta('twitter:image', image);

        // Schema Markup
        if (schema) {
            let script = document.querySelector('#schema-jsonld');
            if (!script) {
                script = document.createElement('script');
                script.id = 'schema-jsonld';
                script.type = 'application/ld+json';
                document.head.appendChild(script);
            }
            script.textContent = JSON.stringify(schema);
        }

    }, [fullTitle, description, image, type, schema, url]);

    return null;
};

export default SEO;