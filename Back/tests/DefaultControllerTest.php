<?php

namespace App\Tests;

use PHPUnit\Framework\TestCase;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class DefaultControllerTest extends WebTestCase
{
    public function testApiDefault(): void
    {
        $client = static::createClient();
        $client->jsonRequest('GET', '/');

        $response = $client->getResponse();
        $this->assertResponseIsSuccessful();
        $this->assertJson($response->getContent());

        $responseData = json_decode($response->getContent(), true);
        //dump($responseData); die();
        $this->assertEquals(["message" => "Hello"], $responseData);
    }

    public function testMockApi(): void
    {
        $client = static::createClient();
        $client->jsonRequest('GET', '/mockApi');

        $response = $client->getResponse();
        $this->assertResponseIsSuccessful();
        $this->assertJson($response->getContent());

        $responseData = json_decode($response->getContent(), true);
        /*dump(count($responseData));
        die();*/
        $this->assertContains(count($responseData), [20]);
    }
}
