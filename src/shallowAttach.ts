/**
 * @file san test utils shallow attach file
 **/

import { Component } from 'san/types';
import attach from './attach';
import { LooseObject, MergedComponentOptions } from '../types';
import {getNewComponent} from './utils/createComponent';
import {createAllStubComponents} from './utils/createComponentStubs';

export default function (component: Component, options: MergedComponentOptions | LooseObject = {}) {
    const stubbedComponents = createAllStubComponents(component);
    const newComponent = getNewComponent(component);

    newComponent.components = stubbedComponents;
    return attach(newComponent, options as MergedComponentOptions);
}