import { render, screen, waitFor } from "@testing-library/vue"
import {mount, flushPromises } from '@vue/test-utils'

import Vue from 'vue'

import "@testing-library/jest-dom";
import '@testing-library/jest-dom/extend-expect'

import ProductList from '../../src/components/ProductList.vue'
import ProductCard from '../../src/components/ProductCard.vue'
import productsMixin from '../../src/mixins/products'

describe('Can consume a list of', () =>{
    beforeAll(() =>{
        const mockProductList = {
            data:[
                { id: 1, name: 'Test product 1' }
            ]
        }
        
        // Following lines tell Jest to mock any call to `axios.get`
        // and to return `mockPostList` instead
        jest.mock('axios', () => ({
            get: jest.fn(() => mockProductList)
        }))
        
    });
    beforeEach(() => jest.resetAllMocks())
    test('available products', async () => {
    
        // Render the component
        await waitFor(() => render(ProductList))

        setTimeout(() => {
            const productLocated = screen.getByText("Test product 1")
            expect(productLocated).toBeInTheDocument()
        }, 0)
            
    })
})
