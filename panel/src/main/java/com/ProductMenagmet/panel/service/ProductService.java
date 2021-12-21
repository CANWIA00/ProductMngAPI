package com.ProductMenagmet.panel.service;

import com.ProductMenagmet.panel.exception.ResourceNotFoundException;
import com.ProductMenagmet.panel.model.Product;
import com.ProductMenagmet.panel.repository.ProductRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class ProductService {

    private final ProductRepository productRepository;

    public List<Product> getAllProduct() {
        return productRepository.findAll();
    }

    public Product getProductById( Long id){
        return productRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Product","Id",id));
    }

    public Product updateProductById(Long id, Product product){
        Product existingproduct = productRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Product","Id",id));

        existingproduct.setName(product.getName());
        existingproduct.setQuentity(product.getQuentity());
        existingproduct.setPrice(product.getPrice());

        productRepository.save(existingproduct);
        return existingproduct;
    }


    public Product createProductById(Product product) {
        return productRepository.save(product);
    }

    public void deleteProductById(Long id) {
        productRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Product","Id",id));
        productRepository.deleteById(id);
    }
}
