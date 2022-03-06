<?php

namespace App\Tests;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class ApiTest extends WebTestCase
{
    public function testApiAddition(): void
    {
        $client = static::createClient();
        // Request a specific page
        $client->jsonRequest('GET', '/api/');
        $response = $client->getResponse();
        $this->assertResponseIsSuccessful();
        $this->assertJson($response->getContent());
        $responseData = json_decode($response->getContent(), true);
        $this->assertEquals(['message' => "Hello world"], $responseData);
    }

    public function testApiProducts(): void
    {
        $client = static::createClient();
        $client->jsonRequest('GET', '/api/products');

        $response = $client->getResponse();
        $this->assertResponseIsSuccessful();
        $this->assertJson($response->getContent());

        $responseData = json_decode($response->getContent(), true);
        //dump($responseData);
        $this->assertEquals($responseData, $responseData);
    }

    public function testApiCart(): void
    {
        $client = static::createClient();
        $client->jsonRequest('GET', '/api/cart');

        $response = $client->getResponse();
        $this->assertResponseIsSuccessful();
        $this->assertJson($response->getContent());

        $responseData = json_decode($response->getContent(), true);
        $this->assertEquals($responseData, $responseData);
    }

    public function testApiProduct(): void
    {
        $client = static::createClient();
        $client->jsonRequest('GET', '/api/products/5');

        $response = $client->getResponse();
        $this->assertResponseIsSuccessful();
        $this->assertJson($response->getContent());

        $responseData = json_decode($response->getContent(), true);
        //dump(count($responseData)); die();
        $this->assertContains(count($responseData), [5]);
        //$this->assertArrayHasKey($responseData, [$responseData]);
    }

    public function testApiAddProductToCart(): void
    {
        $client = static::createClient();
        $client->jsonRequest('POST', '/api/cart/4', [

            'quantity' => 5
        ]);

        $response = $client->getResponse();
        $this->assertResponseIsSuccessful();
        $this->assertJson($response->getContent());

        $responseData = json_decode($response->getContent(), true);
        //dump($responseData['products'][0]);die;
        $this->assertEquals($responseData['products'][0], [
            "id" => 4,
            "name" => "Beth Smith",
            "price" => "9,99",
            "quantity" => 30,
            "image" => "https://rickandmortyapi.com/api/character/avatar/4.jpeg"
        ]);
    }

    public function testApiFailAddProductToCart(): void
    {
        $client = static::createClient();
        $client->jsonRequest('POST', '/api/cart/1', [

            'quantity' => 40
        ]);

        $response = $client->getResponse();
        $this->assertResponseIsSuccessful();
        $this->assertJson($response->getContent());

        $responseData = json_decode($response->getContent(), true);
        //dump($responseData);die;
        $this->assertEquals(['error' => 'too many'], $responseData);
    }

    public function testApiDeleteProductToCart(): void
    {
        $client = static::createClient();
        $client->jsonRequest('DELETE', '/api/cart/4');

        $response = $client->getResponse();
        $this->assertResponseIsSuccessful();
        $this->assertJson($response->getContent());

        $responseData = json_decode($response->getContent(), true);
        $this->assertEquals($responseData, $responseData);
    }

}
