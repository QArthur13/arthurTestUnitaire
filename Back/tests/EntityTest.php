<?php

namespace App\Tests;

use App\Entity\Cart;
use App\Entity\Product;
use PHPUnit\Framework\TestCase;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class EntityTest extends WebTestCase
{
    public function testCart()
    {
        $test = ["Pates"];
        $cartTest = new Cart();
        $this->assertContains("Pates", $cartTest);
    }
}
