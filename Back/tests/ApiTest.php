<?php

namespace App\Tests;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;
use App\Service\RickAndMortyGestion;

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
        $this->assertTrue(true);
    }
}
