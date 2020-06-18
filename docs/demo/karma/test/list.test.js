/**
 * @file karma demo file
 **/
import {expect} from 'chai';
import {shallowMount} from '@baidu/san-test-utils';
import list from '@/components/list.san';

describe('list', () => {
    it('renders li for each item in items', () => {
        const items = ['1', '2'];
        const wrapper = shallowMount(list, {
            data: {items}
        });
        expect(wrapper.findAll('li').length).to.equal(items.length);
    });
});
