import type { Schema, Attribute } from '@strapi/strapi';

export interface ElementsFooterSection extends Schema.Component {
  collectionName: 'components_links_footer_sections';
  info: {
    name: 'FooterSection';
    displayName: 'Footer section';
    icon: 'chevron-circle-down';
  };
  attributes: {
    title: Attribute.String;
    links: Attribute.Component<'links.link', true>;
  };
}

export interface ElementsLogos extends Schema.Component {
  collectionName: 'components_elements_logos';
  info: {
    name: 'logos';
    displayName: 'Logos';
    icon: 'apple-alt';
  };
  attributes: {
    title: Attribute.String;
    logo: Attribute.Media<'images'>;
  };
}

export interface ElementsNotificationBanner extends Schema.Component {
  collectionName: 'components_elements_notification_banners';
  info: {
    name: 'NotificationBanner';
    displayName: 'Notification banner';
    icon: 'exclamation';
  };
  attributes: {
    text: Attribute.RichText;
    type: Attribute.Enumeration<['alert', 'info', 'warning']> &
      Attribute.Required;
  };
}

export interface LayoutFooter extends Schema.Component {
  collectionName: 'components_layout_footers';
  info: {
    name: 'Footer';
    displayName: 'Footer';
    icon: 'caret-square-down';
  };
  attributes: {
    logo: Attribute.Media<'images'>;
    columns: Attribute.Component<'elements.footer-section', true>;
    smallText: Attribute.String;
  };
}

export interface LayoutNavbar extends Schema.Component {
  collectionName: 'components_layout_navbars';
  info: {
    name: 'Navbar';
    displayName: 'Navbar';
    icon: 'map-signs';
    description: '';
  };
  attributes: {
    links: Attribute.Component<'links.link', true>;
    button: Attribute.Component<'links.button-link'>;
    logo: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface LinksButtonLink extends Schema.Component {
  collectionName: 'components_links_buttons';
  info: {
    name: 'Button-link';
    displayName: 'Button link';
    icon: 'fingerprint';
    description: '';
  };
  attributes: {
    url: Attribute.String;
    newTab: Attribute.Boolean & Attribute.DefaultTo<false>;
    text: Attribute.String;
    type: Attribute.Enumeration<['primary', 'secondary']>;
  };
}

export interface LinksButton extends Schema.Component {
  collectionName: 'components_links_simple_buttons';
  info: {
    name: 'Button';
    displayName: 'Button';
    icon: 'fingerprint';
    description: '';
  };
  attributes: {
    text: Attribute.String;
    type: Attribute.Enumeration<['primary', 'secondary']>;
  };
}

export interface LinksLink extends Schema.Component {
  collectionName: 'components_links_links';
  info: {
    name: 'Link';
    displayName: 'Link';
    icon: 'link';
    description: '';
  };
  attributes: {
    url: Attribute.String & Attribute.Required;
    newTab: Attribute.Boolean & Attribute.DefaultTo<false>;
    text: Attribute.String & Attribute.Required;
  };
}

export interface MetaMetadata extends Schema.Component {
  collectionName: 'components_meta_metadata';
  info: {
    name: 'Metadata';
    displayName: 'Metadata';
    icon: 'robot';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String;
    metaDescription: Attribute.Text;
    shareImage: Attribute.Media<'images'>;
    twitterCardType: Attribute.Enumeration<
      ['summary', 'summary_large_image', 'app', 'player']
    > &
      Attribute.DefaultTo<'summary'>;
  };
}

export interface SectionsBottomActions extends Schema.Component {
  collectionName: 'components_slices_bottom_actions';
  info: {
    name: 'BottomActions';
    displayName: 'Bottom actions';
    icon: 'angle-double-right';
  };
  attributes: {
    title: Attribute.String;
    buttons: Attribute.Component<'links.button-link', true>;
  };
}

export interface SectionsHero extends Schema.Component {
  collectionName: 'components_slices_heroes';
  info: {
    name: 'Hero';
    displayName: 'Hero';
    icon: 'heading';
  };
  attributes: {
    title: Attribute.String;
    label: Attribute.String;
    description: Attribute.String;
    picture: Attribute.Media<'images'>;
    smallTextWithLink: Attribute.RichText;
    buttons: Attribute.Component<'links.button-link', true>;
  };
}

export interface SectionsImage extends Schema.Component {
  collectionName: 'components_sections_images';
  info: {
    displayName: 'Image';
    icon: 'picture';
  };
  attributes: {
    Image: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface SectionsLargeVideo extends Schema.Component {
  collectionName: 'components_slices_large_videos';
  info: {
    name: 'LargeVideo';
    displayName: 'Large video';
    icon: 'play-circle';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
    video: Attribute.Media<'videos'> & Attribute.Required;
    poster: Attribute.Media<'images'>;
  };
}

export interface SectionsRichText extends Schema.Component {
  collectionName: 'components_sections_rich_texts';
  info: {
    name: 'RichText';
    displayName: 'Rich text';
    icon: 'text-height';
    description: '';
  };
  attributes: {
    content: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'standard';
        }
      >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'elements.footer-section': ElementsFooterSection;
      'elements.logos': ElementsLogos;
      'elements.notification-banner': ElementsNotificationBanner;
      'layout.footer': LayoutFooter;
      'layout.navbar': LayoutNavbar;
      'links.button-link': LinksButtonLink;
      'links.button': LinksButton;
      'links.link': LinksLink;
      'meta.metadata': MetaMetadata;
      'sections.bottom-actions': SectionsBottomActions;
      'sections.hero': SectionsHero;
      'sections.image': SectionsImage;
      'sections.large-video': SectionsLargeVideo;
      'sections.rich-text': SectionsRichText;
    }
  }
}
