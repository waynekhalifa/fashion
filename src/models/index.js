// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { SocialLink, Feature, Account, User, Media, Attachment, Menu, MenuItem, Page, Category, Tag, Comment, Post, Testimonial, Message, Slide, Subscriber, CustomContent, Member, Notification, Event } = initSchema(schema);

export {
  SocialLink,
  Feature,
  Account,
  User,
  Media,
  Attachment,
  Menu,
  MenuItem,
  Page,
  Category,
  Tag,
  Comment,
  Post,
  Testimonial,
  Message,
  Slide,
  Subscriber,
  CustomContent,
  Member,
  Notification,
  Event
};